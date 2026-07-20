import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

type UserLocalSettings = {
  users: Record<
    string,
    {
      isBiometricEnabled: boolean;
      trxnPin: string;
    }
  >;
};

type UserSettings = {
  isBiometricEnabled: boolean;
  trxnPin: string;
};

type UserSettingsStore = {
  users: Record<string, UserSettings>;
  hasHydrated: boolean;

  updateUserSettings: (userId: string, settings: Partial<UserSettings>) => void;
  getUserSettings: (userId: string) => UserSettings;
  deleteUserSettings: (userId: string) => void;
};

const secureStorage: StateStorage = {
  getItem: async (name: string) => {
    return (await SecureStore.getItemAsync(name)) ?? null;
  },
  setItem: async (name: string, value: string) => {
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string) => {
    await SecureStore.deleteItemAsync(name);
  },
};

export const useUserLocalSettingStore = create<UserSettingsStore>()(
  persist(
    (set, get) => ({
      users: {},
      hasHydrated: false,

      updateUserSettings: (userId, settings) =>
        set((state) => ({
          users: {
            ...state.users,
            [userId]: {
              isBiometricEnabled:
                state.users[userId]?.isBiometricEnabled ?? false,
              trxnPin: state.users[userId]?.trxnPin ?? "",
              ...settings,
            },
          },
        })),

      getUserSettings: (userId) =>
        get().users[userId] ?? { isBiometricEnabled: false, trxnPin: "" },

      deleteUserSettings: (userId) =>
        set((state) => {
          const { [userId]: _, ...remainingUsers } = state.users;

          return { users: remainingUsers };
        }),
    }),
    {
      name: `user_local_settings`,
      storage: createJSONStorage(() => secureStorage),
      onRehydrateStorage: () => (state, error) => {
        useUserLocalSettingStore.setState({ hasHydrated: true });
      },
    },
  ),
);

export const updateLocalSettings = ({
  userId,
  data,
}: {
  userId: string;
  data: UserSettings;
}) => {
  useUserLocalSettingStore.getState().updateUserSettings(userId, data);
};

export const getLocalSettingState = (userId: string) => {
  return useUserLocalSettingStore.getState().getUserSettings(userId);
};

export const deleteUserLocalSetting = (userId: string) => {
  useUserLocalSettingStore.getState().deleteUserSettings(userId);
};
