import SendCryptoScreen from "@/components/screens/wallets/crypto/SendCryptoScreen";
import { Redirect, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { coin } = useLocalSearchParams<{ coin: string }>();
  if (!coin) return <Redirect href={"/wallets"} />;
  return <SendCryptoScreen coin={JSON.parse(coin)} />;
};

export default Screen;

const styles = StyleSheet.create({});
