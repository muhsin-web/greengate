import HeaderBar from "@/components/ui/HeaderBar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PasswordForm from "./cmps/PasswordForm";

const ChangePasswordScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Change password" />

      <PasswordForm onContinue={(data) => console.log(data)} />
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({});
