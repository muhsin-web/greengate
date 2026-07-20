import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WalletType } from "..";
import CoinInput from "../cmps/CoinInput";

const SellFiatScreen = ({ coin }: { coin: WalletType }) => {
  const [amount, setAmount] = React.useState("");

  console.log(amount);
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title={"Sell " + coin.code} />

      <ScrollView className="mt-2" showsVerticalScrollIndicator={false}>
        <View className="mt-8">
          <CoinInput
            value={amount}
            onValueChange={setAmount}
            title={"You sell"}
            balance={coin.amount}
            code={coin.code}
          />
        </View>

        <View className="gap-1 mt-10">
          <View className="p-4 rounded-full flex-row items-center justify-between gap-3 bg-[#F6F6F6]">
            <View className="flex-1">
              <Text className="font-sans text-sm text-secondary-text">
                Rate
              </Text>
            </View>
            <Text className="text-secondary font-sans-medium text-sm">
              ₦1,650 / $1
            </Text>
          </View>

          <View className="p-4 rounded-full flex-row items-center justify-between gap-3 bg-[#F6F6F6]">
            <View className="flex-1">
              <Text className="font-sans text-sm text-secondary-text">
                You receive
              </Text>
            </View>
            <Text className="text-secondary font-sans-medium text-sm">
              ₦2,450,000.00
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <Text className="text-secondary-text font-sans text-xs mb-3">
          Next, we'll show you where to send your USD. Your Naira wallet is
          credited once the deposit is confirmed.
        </Text>
        <Button
          onPress={() =>
            router.navigate({
              pathname: "/wallets/trade-fiat/sell-details",
              params: {
                details: JSON.stringify({ ...coin, amount }),
              },
            })
          }
          title="Continue"
          type="secondary"
        />
      </View>
    </SafeAreaView>
  );
};

export default SellFiatScreen;

const styles = StyleSheet.create({});
