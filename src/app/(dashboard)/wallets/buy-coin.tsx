import { WalletType } from "@/components/screens/wallets";
import BuyCrypto from "@/components/screens/wallets/BuyCrypto";
import BuyFiat from "@/components/screens/wallets/fiat/BuyFiat";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { coin } = useLocalSearchParams<{ coin: string }>();
  const details = JSON.parse(coin) as WalletType;

  return details?.isCrypto ? (
    <BuyCrypto coin={details} />
  ) : (
    <BuyFiat coin={details} />
  );
};

export default Screen;

const styles = StyleSheet.create({});
