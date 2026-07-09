import SuccessPage from "@/components/screens/transfer/cmps/SuccessPage";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { type } = useLocalSearchParams<{ type: "bank" | "user" }>();
  return <SuccessPage type={type} />;
};

export default Screen;

const styles = StyleSheet.create({});
