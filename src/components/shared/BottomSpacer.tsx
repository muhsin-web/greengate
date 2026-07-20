import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomSpacer = () => {
  const insets = useSafeAreaInsets();

  console.log(insets.bottom * 4);

  return (
    <View
      style={{
        height: Platform.select({
          ios: insets.bottom,
          android: (insets.bottom + 70) * 2,
        }),
      }}
    />
  );
};

export default BottomSpacer;

const styles = StyleSheet.create({});
