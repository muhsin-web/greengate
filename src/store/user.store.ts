import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

type UserStoreState = {
  isAuthenticated: boolean;
  hasHydrated: boolean;
  user: any;
};

type PositionStoreActions = {};

type UserStore = UserStoreState & PositionStoreActions;

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

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      hasHydrated: false,
    }),
    {
      name: "auth_user",
      storage: createJSONStorage(() => secureStorage),
      onRehydrateStorage: () => (state, error) => {
        useUserStore.setState({ hasHydrated: true });
      },
    },
  ),
);

export const authenticateUser = () => {
  useUserStore.setState((state) => ({ isAuthenticated: true }));
};

export const logoutUser = () => {
  useUserStore.setState((state) => ({ isAuthenticated: false }));
};
