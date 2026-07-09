import VerificationScreenCard from "@/components/shared/VerificationScreenCard";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const verify = () => {
  return (
    <VerificationScreenCard
      onProceed={() =>
        router.navigate("/(dashboard)/security/reset-password/create")
      }
      title="Reset password"
      type="AUTHENTICATED_RESET_PASSWORD"
    />
  );
};

export default verify;

const styles = StyleSheet.create({});
