import CreatePinScreen from "@/components/screens/create-pin";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { prev_pin } = useLocalSearchParams<{ prev_pin: string }>();
  return <CreatePinScreen type="auth_user" prev_pin={prev_pin} />;
};

export default Screen;

const styles = StyleSheet.create({});
