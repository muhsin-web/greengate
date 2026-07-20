import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WalletType } from "..";
import CoinInput from "../cmps/CoinInput";

const BuyFiatScreen = ({ coin }: { coin: WalletType }) => {
  const [amount, setAmount] = React.useState("");

  console.log(amount);
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title={"Buy " + coin.code} />

      <ScrollView className="mt-2" showsVerticalScrollIndicator={false}>
        <View className="mt-8">
          <CoinInput
            value={amount}
            onValueChange={setAmount}
            title={"You buy"}
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
                You pay
              </Text>
            </View>
            <Text className="text-secondary font-sans-medium text-sm">
              ₦0.00
            </Text>
          </View>

          <View className="p-4 rounded-full flex-row items-center justify-between gap-3 bg-[#F6F6F6]">
            <View className="flex-1">
              <Text className="font-sans text-sm text-secondary-text">
                Naira balance
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
          The USD equivalent is sent to a bank account you choose in the next
          step.
        </Text>
        <Button
          onPress={() =>
            router.navigate({
              pathname: "/wallets/trade-fiat/receipient",
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

export default BuyFiatScreen;

const styles = StyleSheet.create({});
