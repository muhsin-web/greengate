import VerificationScreenCard from "@/components/shared/VerificationScreenCard";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  return (
    <VerificationScreenCard
      onProceed={() => router.navigate("/")}
      title="Reset password"
      type="RESET_PASSWORD"
    />
  );
};

export default Screen;

const styles = StyleSheet.create({});
