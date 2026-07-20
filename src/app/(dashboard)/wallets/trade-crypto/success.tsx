import SuccessPage from "@/components/screens/transfer/cmps/SuccessPage";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { details } = useLocalSearchParams<{ details: string }>();
  return <SuccessPage details={JSON.parse(details)} type="send_crypto" />;
};

export default Screen;

const styles = StyleSheet.create({});
