import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const TradeCryptoLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="receipt" />
      <Stack.Screen name="receive-crypto" />
      <Stack.Screen
        name="confirmation"
        options={{
          presentation: "containedTransparentModal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen name="success" />
    </Stack>
  );
};

export default TradeCryptoLayout;

const styles = StyleSheet.create({});
