import { WalletType } from "@/components/screens/wallets";
import WalletCoinDetails from "@/components/screens/wallets/WalletCoinDetails";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const Screen = () => {
  const { details } = useLocalSearchParams<{ details: string }>();

  return <WalletCoinDetails coin={JSON.parse(details) as WalletType} />;
};

export default Screen;

const styles = StyleSheet.create({});
