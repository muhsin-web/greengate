import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomSpacer = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height: Platform.select({
          ios: insets.bottom,
          android: insets.bottom * 4,
        }),
      }}
    />
  );
};

export default BottomSpacer;

const styles = StyleSheet.create({});
