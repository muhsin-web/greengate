import VerificationScreenCard from "@/components/shared/VerificationScreenCard";
import { authenticateUser } from "@/store/user.store";
import { StyleSheet } from "react-native";

const Screen = () => {
  return (
    <VerificationScreenCard
      onProceed={authenticateUser}
      type="LOGIN"
      title={"Verify login"}
    />
  );
};

export default Screen;

const styles = StyleSheet.create({});
