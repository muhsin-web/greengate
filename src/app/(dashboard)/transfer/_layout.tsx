import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const TransferLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="send_to_greengate_user" />
      <Stack.Screen
        name="receipt"
        options={{
          presentation: "pageSheet",
        }}
      />
      <Stack.Screen
        name="transfer-summary"
        options={{
          presentation: "containedTransparentModal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name="banks"
        options={{
          presentation: "pageSheet",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name="qr-code_scanner"
        options={{
          presentation: "pageSheet",
        }}
      />
      <Stack.Screen name="success" />
    </Stack>
  );
};

export default TransferLayout;

const styles = StyleSheet.create({});
