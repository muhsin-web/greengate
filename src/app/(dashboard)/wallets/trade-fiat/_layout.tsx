import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const TradeFiatLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="recipient" />
      <Stack.Screen name="receipt" />
      <Stack.Screen name="sell-fiat" />
      <Stack.Screen name="success" />
      <Stack.Screen
        name="confirmation"
        options={{
          presentation: "containedTransparentModal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
};

export default TradeFiatLayout;

const styles = StyleSheet.create({});
