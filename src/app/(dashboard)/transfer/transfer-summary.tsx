import TransferSummary from "@/components/screens/transfer/TransferSummary";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { type } = useLocalSearchParams<{ type: "user" | "bank" }>();
  return <TransferSummary type={type} />;
};

export default Screen;

const styles = StyleSheet.create({});
