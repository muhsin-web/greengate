import { ArrowLeftIcon } from "@/assets/svgs/ArrowLeftIcon";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { GlassButton } from "./GlassButton";

const HeaderBar = ({ title }: { title: string }) => {
  const cangoBack = router.canGoBack();

  return (
    <View className="flex-row pt-3">
      {cangoBack && (
        <GlassButton
          onPress={() => {
            if (cangoBack) {
              router.back();
            }
          }}
        >
          <ArrowLeftIcon />
        </GlassButton>
      )}
      <View className="absolute justify-center self-center items-center w-full -z-10">
        <Text className="self-center font-sans-medium text-lg text-secondary">
          {title || "title"}
        </Text>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({});
