import SendCryptoConfirmationModal from "@/components/screens/wallets/crypto/SendCryptoConfirmationModal";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { details } = useLocalSearchParams<{ details: string }>();
  return <SendCryptoConfirmationModal details={JSON.parse(details)} />;
};

export default Screen;

const styles = StyleSheet.create({});
