import { AuthUser } from "@/api";
import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

type UserStoreState = {
  isAuthenticated: boolean;
  hasHydrated: boolean;
  hasOnboarded: boolean;
  user: AuthUser | null;
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
      hasOnboarded: false,
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

export const authenticateUser = (user?: any) => {
  useUserStore.setState((state) => ({ isAuthenticated: true, user }));
};

export const onboardUser = () => {
  useUserStore.setState((state) => ({ hasOnboarded: true }));
};

export const logoutUser = () => {
  useUserStore.setState((state) => ({ isAuthenticated: false }));
};
