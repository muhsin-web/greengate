// app/(tabs)/_floating-tab-layout.tsx
import { ArrowLeftRightIcon } from "@/assets/svgs/ArrowLeftRightIcon";
import { CardHolderIcon } from "@/assets/svgs/CardHolderIcon";
import { GearIcon } from "@/assets/svgs/GearIcon";
import { HoueIcon } from "@/assets/svgs/HouseIcon";
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
        elevation: 10,
        shadowColor: "#000000d2",
      }}
      className="absolute overflow-hidden bg-transparent border border-white left-4 right-4 rounded-full"
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
              style={{ flex: isFocused ? 1.3 : 1, height: 60 }}
              className={cn(
                "items-center justify-center flex-1 py-2 rounded-full",
                isFocused && "flex-[1.5] bg-[#00000014]",
              )}
            >
              {options.tabBarIcon?.({ focused: isFocused })}
              <Text
                className={cn(
                  "text-xs font-sans-medium",
                  isFocused ? "text-[#2A2A2A]" : "text-[#2A2A2A]",
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
          tabBarIcon: HoueIcon as any,
          // tabBarIcon: require("@/assets/images/tabIcons/house.png"),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: CardHolderIcon as any,
          // tabBarIcon: require("@/assets/images/tabIcons/cardholder.png"),
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: "Swap",
          tabBarIcon: ArrowLeftRightIcon as any,
          // tabBarIcon: require("@/assets/images/tabIcons/swap.png"),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: GearIcon as any,
          // tabBarIcon: require("@/assets/images/tabIcons/gear.png"),
        }}
      />
    </Tabs>
  );
}
