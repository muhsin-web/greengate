import { cn } from "@/libs/cn";
import { Image } from "expo-image";
import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import ModalWrapper from "./modal-wrapper";
const themes = [
  { title: "light", icon: require("@/assets/images/themes/theme_light.png") },
  { title: "dark", icon: require("@/assets/images/themes/theme_dark.png") },
  { title: "system", icon: require("@/assets/images/themes/theme_system.png") },
];

const { width } = Dimensions.get("screen");
const ThemePicker = () => {
  const [selected, setSelected] = React.useState(themes[0].title);
  return (
    <ModalWrapper title="Display theme">
      <View className="flex-row justify-around mt-10">
        {themes.map((theme, index) => {
          return (
            <Pressable onPress={() => setSelected(theme.title)} key={index}>
              <Image
                style={{ width: width / 4, aspectRatio: 1 / 2 }}
                contentFit="contain"
                source={theme.icon}
              />
              <View className="justify-center items-center mt-6 gap-2">
                <View
                  className={cn(
                    "w-6 h-6 rounded-full border-2 border-[#7E7E7E]",
                    theme.title == selected && "border-0 bg-secondary",
                  )}
                />
                <Text className="text-center capitalize font-sans-medium text-[#393939]">
                  {theme.title}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </ModalWrapper>
  );
};

export default ThemePicker;

const styles = StyleSheet.create({});
