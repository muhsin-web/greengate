import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WalletType } from "..";

interface TrxnDetails extends WalletType {
  amount: string;
}
const RecipientDetailsScreen = ({
  trxnDetails,
}: {
  trxnDetails: TrxnDetails;
}) => {
  const [accountName, setAccountName] = React.useState("");
  const [bankName, setBankName] = React.useState("");
  const [accountNumber, setAccountNumber] = React.useState("");

  console.log(trxnDetails);

  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Recipient Details" />
      <ScrollView className="mt-3" showsVerticalScrollIndicator={false}>
        <View className="gap-6 mt-3">
          <Text className="font-sans text-[#525252]">
            Where should we send the $250.00?
          </Text>
          <Input
            value={accountName}
            onChangeText={setAccountName}
            placeholder="Account name"
          />
          <Input
            value={bankName}
            onChangeText={setBankName}
            placeholder="Bank name"
          />
          <Input
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="numeric"
            inputMode="numeric"
            placeholder="Account number"
          />
        </View>
      </ScrollView>

      <Button
        onPress={() =>
          router.navigate({
            pathname: "/wallets/trade-fiat/confirmation",
            params: {
              trxnDetails: JSON.stringify({
                ...trxnDetails,
                bankName,
                accountName,
                accountNumber,
              }),
            },
          })
        }
        title="Review purchase"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default RecipientDetailsScreen;

const styles = StyleSheet.create({});
