import VerificationScreenCard from "@/components/shared/VerificationScreenCard";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  return (
    <VerificationScreenCard
      onProceed={(e) =>
        router.navigate({
          pathname: "/auth/forgot-password/create-password",
          params: {
            email,
            pin: e,
          },
        })
      }
      title="Reset password"
      email={email}
      type="RESET_PASSWORD"
    />
  );
};

export default Screen;

const styles = StyleSheet.create({});
