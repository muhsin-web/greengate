import TransferAmountScreen from "@/components/screens/transfer/TransferAmountScreen";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { type } = useLocalSearchParams<{ type: "user" | "bank" }>();
  return <TransferAmountScreen type={type} />;
};

export default Screen;

const styles = StyleSheet.create({});
