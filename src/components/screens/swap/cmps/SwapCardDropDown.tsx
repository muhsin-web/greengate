import { ArrowClockWise } from "@/assets/svgs/ArrowClockWisee";
import { ChevDownIcon } from "@/assets/svgs/ChevDownIcon";
import BottomSpacer from "@/components/shared/BottomSpacer";
import { AssetType } from "@/components/shared/modal/SwapAssetsModal";
import Button from "@/components/ui/Button";
import { useModal } from "@/hooks/useModal";
import { Image } from "expo-image";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SwapCardDropDown = () => {
  const insets = useSafeAreaInsets();
  const { showModal } = useModal();
  const [from, setFrom] = React.useState<AssetType | null>(null);
  const [to, setTo] = React.useState<AssetType | null>(null);
  const [amount, setAmount] = React.useState("");

  const handleContinue = async () => {
    if (!from || !to || !amount) return;
    try {
      showModal("swap_review", {
        amount,
        from,
        to,
      });
      // const res = await
    } catch (error) {}
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        <View className="justify-center items-center gap-1">
          <View className="absolute z-10 w-10 h-10 rounded-full justify-center items-center border-4 border-primary-foreground">
            <ArrowClockWise />
          </View>
          <View className="flex-row justify-between bg-[#F3F3F3] rounded-3xl py-9 px-6">
            <View className="flex-1 gap-2">
              <Text className="text-[#676767] text-xs font-sans">
                Enter Amount
              </Text>
              <TextInput
                placeholder="$0.00"
                autoFocus
                value={amount}
                inputMode="numeric"
                keyboardType="number-pad"
                onChangeText={setAmount}
                placeholderTextColor={"#090909"}
                className="font-sans-medium text-[#090909] text-2xl"
              />
              <Text className="text-[#676767] text-xs font-sans">
                Available: 12
              </Text>
            </View>

            <Pressable
              onPress={() =>
                showModal(
                  "swap_assest_picker",
                  {
                    selected: to,
                  },
                  {
                    onConfirm(e) {
                      setFrom(e);
                    },
                  },
                )
              }
              className="flex-row items-center p-1 pr-2 bg-[#FAFAFA] border border-[#EFEFEF] rounded-full self-center gap-2"
            >
              <Image
                style={[styles.icon]}
                source={from?.icon ?? require("@/assets/images/coins/btc.png")}
              />
              <Text className="font-sans-medium text-xs text-[#090909]">
                {from?.code ?? "BTC"}
              </Text>
              <ChevDownIcon />
            </Pressable>
          </View>

          <View className="flex-row justify-between bg-[#F3F3F3] rounded-3xl py-9 px-6">
            <View className="flex-1 gap-2">
              <Text className="text-[#676767] text-xs font-sans">
                Amount to Receive
              </Text>
              <TextInput
                placeholder="$0.00"
                editable={false}
                inputMode="numeric"
                keyboardType="number-pad"
                placeholderTextColor={"#090909"}
                className="font-sans-medium text-[#090909] text-2xl"
              />
              <Text className="text-[#676767] text-xs font-sans">
                Available: 12
              </Text>
            </View>

            <Pressable
              onPress={() =>
                showModal(
                  "swap_assest_picker",
                  {
                    selected: from,
                  },
                  {
                    onConfirm(e) {
                      setTo(e);
                    },
                  },
                )
              }
              className="flex-row items-center p-1 pr-2 bg-[#FAFAFA] border border-[#EFEFEF] rounded-full self-center gap-2"
            >
              <Image
                style={[styles.icon]}
                source={to?.icon ?? require("@/assets/images/coins/usdt.png")}
              />
              <Text className="font-sans-medium text-xs text-[#090909]">
                {to?.code ?? "BTC"}
              </Text>
              <ChevDownIcon />
            </Pressable>
          </View>
        </View>

        <Button
          disabled={!amount || !from || !to}
          onPress={handleContinue}
          title="Swap"
          type="secondary"
          style={{ marginTop: insets.bottom }}
        />
        <BottomSpacer />
      </ScrollView>
    </>
  );
};

export default SwapCardDropDown;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
