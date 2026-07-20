import HeaderBar from "@/components/ui/HeaderBar";
import { useModalStore } from "@/store/modal.store";
import { BlurView } from "expo-blur";
import React from "react";
import {
  BackHandler,
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");
const ModalWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  const actions = useModalStore().actions;
  const hideModal = useModalStore().hideModal;
  const isVisible = useModalStore().isVisible;
  const type = useModalStore((s) => s.type);
  const insets = useSafeAreaInsets();
  const [ready, setReady] = React.useState(false);
  const translateY = useSharedValue(500);

  const handleClose = () => {
    actions?.onClose?.();
    hideModal();
  };

  React.useEffect(() => {
    if (!isVisible) return;
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        handleClose();
        return true;
      },
    );
    return () => subscription.remove();
  }, [isVisible]);

  React.useEffect(() => {
    if (isVisible) {
      translateY.value = withSpring(0, {
        stiffness: 190,
        damping: 20, // lower = more bounce
        mass: 0.8,
        overshootClamping: false,
        // easing: Easing.in(Easing.cubic),
      });
    } else {
      translateY.value = withTiming(500, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      });
    }
  }, [isVisible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      key={type}
      entering={FadeIn}
      exiting={FadeOut}
      style={{
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        width,
        height,
      }}
    >
      <BlurView
        tint="dark"
        intensity={Platform.select({ ios: 8, android: 50 })}
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <Pressable onPress={handleClose} style={[StyleSheet.absoluteFill]} />
        <Animated.View
          key={String(ready)}
          style={[animatedStyle, styles.modalBody]}
          className={"bg-white"}
          // layout={LinearTransition}
          // onLayout={() => setReady(true)}
        >
          <HeaderBar
            hideBackBtn={true}
            title={title!}
            hasRightButton
            className="!mt-1"
            onPressRightButton={handleClose}
          />
          {children}
          <View style={{ height: insets.bottom }} />
        </Animated.View>
      </BlurView>
    </Animated.View>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({
  modalBody: {
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
