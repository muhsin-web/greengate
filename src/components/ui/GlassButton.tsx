// components/GlassButton.tsx
import { cn } from "@/libs/cn";
import { GlassView, isLiquidGlassAvailable } from "expo-glass-effect";
import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";

type GlassButtonProps = {
  title?: string;
  onPress?: () => void;
  className?: string;
  textClass?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export function GlassButton({
  title,
  onPress,
  className,
  textClass,
  children,
  style,
}: GlassButtonProps) {
  console.log(className);
  if (!isLiquidGlassAvailable()) {
    // Fallback for iOS < 26, Android, and web
    return (
      <Pressable
        onPress={onPress}
        style={[
          {
            shadowOpacity: 1,
            shadowColor: "#000000a7",
            shadowRadius: 22,
            shadowOffset: { height: 20, width: 12 },
            elevation: 10,
          },
          style,
        ]}
        className={cn(
          "p-3 justify-center w-fit items-center rounded-full bg-white/60 border border-white self-start",
          className,
        )}
      >
        {title ? (
          <Text
            className={cn(
              "font-sans-bold text-lg text-primary-text",
              textClass,
            )}
          >
            {title}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    );
  }

  return (
    <GlassView
      isInteractive
      glassEffectStyle={{ style: "regular" }}
      style={[
        {
          borderRadius: 999,
          padding: 12,
        },
        style,
      ]}
    >
      <Pressable
        onPress={onPress}
        className="flex-1 justify-center items-center"
      >
        {title ? (
          <Text
            className={cn(
              "font-sans-bold text-lg text-primary-text",
              textClass,
            )}
          >
            {title}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    </GlassView>
  );
}
