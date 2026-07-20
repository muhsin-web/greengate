import RecipientDetailsScreen from "@/components/screens/wallets/fiat/RecipientDetailsScreen";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { details } = useLocalSearchParams<{ details: string }>();

  if (!details) {
    router.back();
    return;
  }
  return <RecipientDetailsScreen trxnDetails={JSON.parse(details)} />;
};

export default Screen;

const styles = StyleSheet.create({});
