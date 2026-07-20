import VerificationScreenCard from "@/components/shared/VerificationScreenCard";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  return (
    <VerificationScreenCard
      type="CREATE_ACCOUNT"
      onProceed={() => router.navigate("/auth/pin-setup")}
      title="Enter verification code"
    />
  );
};

export default Screen;

const styles = StyleSheet.create({});
