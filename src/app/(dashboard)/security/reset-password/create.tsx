import PasswordForm from "@/components/screens/settings/cmps/PasswordForm";
import HeaderBar from "@/components/ui/HeaderBar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const create = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Reset password" />

      <PasswordForm type={"reset"} onContinue={(data) => console.log(data)} />
    </SafeAreaView>
  );
};

export default create;

const styles = StyleSheet.create({});
