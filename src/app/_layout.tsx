import "@/libs/cssInterop";
import { useUserStore } from "@/store/user.store";
import { isTokenValid } from "@/utils/isTokenValid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const isAuthenticated = useUserStore((s) => s.isAuthenticated);
  const hasHydrated = useUserStore((s) => s.hasHydrated);

  React.useEffect(() => {
    if (hasHydrated) {
      SplashScreen.hideAsync();
    }
  }, [hasHydrated]);

  if (!hasHydrated) {
    return null;
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: true, // good default for balances/rates
      },
    },
  });

  return (
    <SafeAreaProvider key={isAuthenticated ? "auth" : "guest"}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
          <Stack.Protected guard={isAuthenticated && isTokenValid()}>
            <Stack.Screen name="(dashboard)" />
          </Stack.Protected>
          <Stack.Protected guard={!isAuthenticated || !isTokenValid()}>
            <Stack.Screen name="auth" />
          </Stack.Protected>
        </Stack>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
