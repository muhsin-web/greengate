import ForgotPasswordScreen from "@/components/screens/forgot-password";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  return (
    <ForgotPasswordScreen
      type="visitor"
      onContinue={(e) =>
        router.navigate({
          pathname: "/auth/forgot-password/verify",
          params: { email: e },
        })
      }
    />
  );
};

export default Screen;

const styles = StyleSheet.create({});
