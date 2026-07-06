// app/(tabs)/_floating-tab-layout.tsx
import { cn } from "@/libs/cn";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { Pressable, Text, View } from "react-native";

function FloatingTabBar({ state, descriptors, navigation }: any) {
  return (
    <View className="absolute bottom-6 overflow-hidden bg-transparent border border-[#0000001A] left-4 right-4 rounded-full">
      <BlurView
        intensity={15}
        blurMethod="dimezisBlurView"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 50,
          padding: 6,
        }}
        tint="light"
      >
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];

          return (
            <Pressable
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={{ flex: isFocused ? 1.3 : 1 }}
              className={cn(
                "items-center justify-center flex-1 py-2 rounded-full h-14",
                isFocused && "flex-[1.5] bg-[#00000014]",
              )}
            >
              {options.tabBarIcon?.({ focused: isFocused })}
              <Text
                className={cn(
                  "text-xs font-sans-medium mt-1",
                  isFocused ? "text-[#2A2A2A]" : "text-gray-400",
                )}
              >
                {options.title}
              </Text>
            </Pressable>
          );
        })}
      </BlurView>
    </View>
  );
}

export default function FloatingTabLayout() {
  return (
    <Tabs tabBar={(props) => <FloatingTabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="wallet" options={{ title: "Wallet" }} />
      <Tabs.Screen name="swap" options={{ title: "Swap" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
