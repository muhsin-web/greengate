// components/GlassButton.tsx
import { cn } from "@/libs/cn";
import { GlassView, isLiquidGlassAvailable } from "expo-glass-effect";
import React from "react";
import { Pressable, Text } from "react-native";

type GlassButtonProps = {
  title?: string;
  onPress?: () => void;
  className?: string;
  textClass?: string;
  children?: React.ReactNode;
};

export function GlassButton({
  title,
  onPress,
  className,
  textClass,
  children,
}: GlassButtonProps) {
  console.log(isLiquidGlassAvailable());
  if (!isLiquidGlassAvailable()) {
    // Fallback for iOS < 26, Android, and web
    return (
      <Pressable
        onPress={onPress}
        style={{
          shadowOpacity: 1,
          shadowColor: "#0000001A",
          shadowRadius: 12,
        }}
        className={cn(
          "p-3 justify-center w-fit items-center rounded-full bg-[#FFFFFF99] self-start",
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
      style={{ borderRadius: 999, height: 40, width: 40 }}
      className={cn("h-10 w-12 px-6", className)}
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
