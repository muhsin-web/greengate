import BuyFiatScreen from "@/components/screens/wallets/fiat/BuyFiat";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { coin } = useLocalSearchParams<{ coin: string }>();
  if (!coin) return;
  return <BuyFiatScreen coin={JSON.parse(coin)} />;
};

export default Screen;

const styles = StyleSheet.create({});
