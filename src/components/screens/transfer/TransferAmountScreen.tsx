import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import KeyPad from "@/components/ui/KeyPad";
import {
   formatAmountDisplay,
   formatAmountInput,
} from "@/utils/format-currency";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TransferAmountScreen = ({ type }: { type: "user" | "bank" }) => {
  const [amount, setAmount] = React.useState("");

  console.log(formatAmountDisplay(amount), "here");
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Amount" />

      <View className="flex-1 justify-center">
        <View className="flex-row items-center gap-3 self-center mb-auto bg-primary-accent-green p-1 pr-3 rounded-full">
          <View className="w-11 h-11 rounded-full justify-center items-center bg-[#FFDBB8]">
            <Image
              style={{ width: 40, height: 40 }}
              source={require("@/assets/images/user-dp.png")}
            />
          </View>
          <Text className="!font-sans-medium text-secondary">
            ejembiii.greengate
          </Text>
        </View>

        <View className="h-16 w-full">
          <View className="px-4 my-auto">
            <Text className="font-sans-medium text-secondary text-4xl text-center">
              ₦{formatAmountDisplay(amount)?.split(".")[0]}.
              <Text className="font-sans-medium text-[#8A8B8D] text-4xl text-center">
                {formatAmountDisplay(amount)?.split(".")[1]}
              </Text>
            </Text>
          </View>
          <TextInput
            onChangeText={setAmount}
            value={amount}
            keyboardType="numeric"
            returnKeyType="done"
            className="font-sans-medium absolute w-full h-full left-0 top-0 opacity-0 z-20 justify-center bg-red-300"
          />
        </View>
        <View className="mt-auto">
          <Text className="font-sans-medium text-sm text-center text-[#676767]">
            Balance: <Text className="text-secondary">₦15,256</Text>.78
          </Text>
          <KeyPad
            isDecimal
            value={amount}
            maxLength={10}
            onChange={(e) => setAmount(formatAmountInput(e))}
          />
        </View>

        {type == "bank" && (
          <View className="mb-3">
            <Input placeholder="Enter remarks" />
          </View>
        )}
      </View>
      <Button
        title="Continue"
        type="secondary"
        onPress={() =>
          router.navigate({
            pathname: "/(dashboard)/transfer/transfer-summary",
            params: {
              type,
            },
          })
        }
        disabled={Number(amount) < 100}
      />
    </SafeAreaView>
  );
};

export default TransferAmountScreen;
