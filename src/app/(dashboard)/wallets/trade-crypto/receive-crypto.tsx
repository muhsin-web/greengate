import ReceiveCryptoScreen from "@/components/screens/wallets/crypto/ReceiveCryptoScreen";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { coin } = useLocalSearchParams<{ coin: string }>();
  return <ReceiveCryptoScreen details={JSON.parse(coin)} />;
};

export default Screen;

const styles = StyleSheet.create({});
