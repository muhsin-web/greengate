import Receipt from "@/components/screens/transfer/Receipt";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { type } = useLocalSearchParams<{ type: "bank" | "user" }>();
  return <Receipt type={type} />;
};

export default Screen;

const styles = StyleSheet.create({});
