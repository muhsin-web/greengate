import { ModalPayloads, useModalStore } from "@/store/modal.store";
import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ModalWrapper from "./modal-wrapper";

const assets = [
  {
    title: "Bitcoin",
    code: "BTC",
    icon: require("@/assets/images/coins/btc.png"),
  },
  {
    title: "Binance",
    code: "BNB",
    icon: require("@/assets/images/coins/binance.png"),
  },
  {
    title: "Usdc",
    code: "USDC",
    icon: require("@/assets/images/coins/usdt.png"),
  },
  {
    title: "Ethereum",
    code: "ETH",
    icon: require("@/assets/images/coins/ethereum.jpg"),
  },
  {
    title: "Usdt",
    code: "USDT",
    icon: require("@/assets/images/coins/tether.png"),
  },
  {
    title: "TRON",
    code: "TRX",
    icon: require("@/assets/images/coins/tron.png"),
  },
  { title: "Sui", code: "SUI", icon: require("@/assets/images/coins/sui.png") },
] as const;

export type AssetType = (typeof assets)[number];

const SwapAssetsModal = () => {
  const actions = useModalStore((s) => s.actions);
  const payload = useModalStore(
    (s) => s.payload as ModalPayloads["swap_assest_picker"] | undefined,
  );
  const hideModal = useModalStore((s) => s.hideModal);

  const handleSelect = (e: AssetType) => {
    actions?.onConfirm?.(e);
    hideModal();
  };

  return (
    <ModalWrapper title="Select asset">
      <ScrollView className="mt-3">
        <View className="gap-3">
          {assets
            .filter((item) => item.code != payload?.selected?.code)
            .map((item) => (
              <Pressable
                onPress={() => handleSelect(item)}
                key={item?.title}
                className="flex-row items-center gap-2 p-4 rounded-full bg-[#F6F6F6]"
              >
                <Image
                  style={{ width: 42, height: 42, borderRadius: 21 }}
                  source={item?.icon}
                />
                <View className="flex-1">
                  <Text className="text-sm font-sans-medium text-primary-text">
                    {item?.title}
                  </Text>
                  <Text className="text-[#8A8B8D] font-sans-medium text-xs">
                    {item?.code}
                  </Text>
                </View>
              </Pressable>
            ))}
        </View>
      </ScrollView>
    </ModalWrapper>
  );
};

export default SwapAssetsModal;

const styles = StyleSheet.create({});
