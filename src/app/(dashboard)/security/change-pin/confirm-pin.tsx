import ConfirmPinScreen from "@/components/screens/create-pin/confirm-pin";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { pin, prev_pin } = useLocalSearchParams<{
    pin: string;
    prev_pin: string;
  }>();
  return <ConfirmPinScreen type="auth_user" pin={pin} prev_pin={prev_pin} />;
};

export default Screen;

const styles = StyleSheet.create({});
