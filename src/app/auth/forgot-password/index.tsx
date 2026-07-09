import ForgotPasswordScreen from "@/components/screens/forgot-password";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  return (
    <ForgotPasswordScreen
      type="visitor"
      onContinue={() =>
        router.navigate({ pathname: "/auth/forgot-password/verify" })
      }
    />
  );
};

export default Screen;

const styles = StyleSheet.create({});
