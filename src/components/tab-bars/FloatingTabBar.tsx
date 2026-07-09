// app/(tabs)/_floating-tab-layout.tsx
import { cn } from "@/libs/cn";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { Platform, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function FloatingTabBar({ state, descriptors, navigation }: any) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        bottom: Platform.select({
          ios: insets.bottom,
          android: insets.bottom + 10,
        }),
      }}
      className="absolute bottom-6 overflow-hidden bg-transparent border border-[#0000001A] left-4 right-4 rounded-full"
    >
      <BlurView
        intensity={Platform.select({ ios: 15, android: 120 })}
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
              {/* {options.tabBarIcon?.({ focused: isFocused })} */}
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
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <FloatingTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: require("@/assets/images/tabIcons/house.png"),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: require("@/assets/images/tabIcons/cardholder.png"),
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: "Swap",
          tabBarIcon: require("@/assets/images/tabIcons/swap.png"),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: require("@/assets/images/tabIcons/gear.png"),
        }}
      />
    </Tabs>
  );
}
