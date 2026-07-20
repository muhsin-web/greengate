import { ArrowLeftIcon } from "@/assets/svgs/ArrowLeftIcon";
import { CloseIcon } from "@/assets/svgs/CloseIcon";
import { cn } from "@/libs/cn";
import { router } from "expo-router";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { GlassButton } from "./GlassButton";

const { width } = Dimensions.get("screen");
const HeaderBar = ({
  title,
  containerClass,
  className,
  forceShowBackBtn = false,
  hideBackBtn = false,
  hasRightButton = false,
  onPressRightButton,
  rightButtonIcon,
}: {
  forceShowBackBtn?: boolean;
  title: string;
  className?: string;
  containerClass?: string;
  hasRightButton?: boolean;
  hideBackBtn?: boolean;
  onPressRightButton?: () => void;
  rightButtonIcon?: React.ReactNode;
}) => {
  const cangoBack = router.canGoBack();

  return (
    <View
      style={{ marginTop: Platform.select({ android: 24, ios: 8 }) }}
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
          containerClass,
        )}
      >
        <Text className="self-center font-sans-medium text-lg text-secondary">
          {title || "title"}
        </Text>
      </View>

      {hasRightButton && (
        <GlassButton
          style={{
            width: 44,
            height: 44,
            alignSelf: "flex-end",
            marginLeft: "auto",
          }}
          onPress={onPressRightButton ? onPressRightButton : router.back}
        >
          {rightButtonIcon ? rightButtonIcon : <CloseIcon />}
        </GlassButton>
      )}
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({});
