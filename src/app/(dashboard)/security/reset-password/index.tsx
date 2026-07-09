import ForgotPasswordScreen from "@/components/screens/forgot-password";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  return (
    <ForgotPasswordScreen
      onContinue={() =>
        router.navigate({
          pathname: "/(dashboard)/security/reset-password/verify",
        })
      }
      type="auth_user"
    />
  );
};

export default Screen;

const styles = StyleSheet.create({});
