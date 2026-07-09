import { ArrowLeftIcon } from "@/assets/svgs/ArrowLeftIcon";
import { CloseIcon } from "@/assets/svgs/CloseIcon";
import { cn } from "@/libs/cn";
import { router } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { GlassButton } from "./GlassButton";

const { width } = Dimensions.get("screen");
const HeaderBar = ({
  title,
  className,
  forceShowBackBtn = false,
  hideBackBtn = false,
  hasCancelBtn = false,
  onCancel,
}: {
  forceShowBackBtn?: boolean;
  title: string;
  className?: string;
  hasCancelBtn?: boolean;
  hideBackBtn?: boolean;
  onCancel?: () => void;
}) => {
  const cangoBack = router.canGoBack();

  return (
    <View
      className={cn(
        "flex-row h-12 mt-2.5 items-center",
        !cangoBack && "mt-4",
        className,
      )}
    >
      {cangoBack && !hideBackBtn && (
        <GlassButton
          // className="!w-20 !h-20 !bg-red-400"
          style={{
            width: 44,
            height: 44,
            marginRight: "auto",
          }}

          onPress={() => {
            if (cangoBack) {
              router.back();
            }
          }}
        >
          <ArrowLeftIcon />
        </GlassButton>
      )}

      <View
        className={cn(
          "absolute inset-0 justify-center h-full self-center items-center w-full -z-10",
        )}
      >
        <Text className="self-center font-sans-medium text-lg text-secondary">
          {title || "title"}
        </Text>
      </View>

      {hasCancelBtn && (
        <GlassButton
          // className="!w-20 !h-20 !bg-red-400"
          style={{
            width: 44,
            height: 44,
            alignSelf: "flex-end",
            marginLeft: "auto",
          }}
          onPress={onCancel}
        >
          <CloseIcon />
        </GlassButton>
      )}
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({});
