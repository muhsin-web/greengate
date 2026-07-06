import ConfirmPinScreen from "@/components/screens/create-pin/confirm-pin";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { pin } = useLocalSearchParams<{ pin: string }>();
  return <ConfirmPinScreen pin={pin} />;
};

export default Screen;

const styles = StyleSheet.create({});
