import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WalletType } from "..";
import CoinInput from "../cmps/CoinInput";

const SendCryptoScreen = ({ coin }: { coin: WalletType }) => {
  const [amount, setAmount] = React.useState("");
  const [memo, setMemo] = React.useState("");
  const [address, setAddress] = React.useState("");

  const account_bal = "12.7";
  return (
    <SafeAreaView className="bg-primary-foreground flex-1 px-4">
      <HeaderBar title={"Send " + coin?.code} />

      <ScrollView className="mt-5" showsVerticalScrollIndicator={false}>
        <View className="mt-8">
          <CoinInput
            value={amount}
            isCrypto={true}
            onValueChange={setAmount}
            balance={account_bal}
            code={coin.code}
          />
        </View>

        <View className="gap-6 mt-10">
          <Input
            value={address}
            onChangeText={setAddress}
            placeholder="Paste XLM address"
          />
          <View>
            <Input value={memo} onChangeText={setMemo} placeholder="Memo" />
            <View className="bg-[#FEF3D6] py-2 px-3 self-start rounded-full mt-1.5">
              <Text className="font-sans text-sm text-[#6E5900]">
                Required by most exchanges
              </Text>
            </View>
          </View>

          <View className="bg-primary-accent-lighter rounded-full p-4 justify-between flex-row">
            <Text className="text-secondary-textlight font-sans text-sm">
              Network fee
            </Text>
            <Text className="font-sans-medium text-sm text-secondary">
              0.00001 {coin.code}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="gap-6">
        <Text className="text-[#525252] font-sans text-xs">
          Sending to an exchange? Leave out the memo only if the recipient
          confirms it isn't needed. Funds sent without a required memo may be
          lost.
        </Text>

        <Button
          type="secondary"
          title="Continue"
          onPress={() =>
            router.navigate({
              pathname: "/wallets/trade-crypto/confirmation",
              params: {
                details: JSON.stringify({ ...coin, amount, memo, address }),
              },
            })
          }
          disabled={!amount || !memo || !address}
        />
      </View>
    </SafeAreaView>
  );
};

export default SendCryptoScreen;

const styles = StyleSheet.create({});
