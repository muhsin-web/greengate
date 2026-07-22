import { FxRate } from "@/api";
import { ArrowDownIcon } from "@/assets/svgs/ArrowDownIcon";
import { EyeOffIcon } from "@/assets/svgs/EyeCloseIcon";
import { FileTextIcon } from "@/assets/svgs/FileTextIcon";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { useModal } from "@/hooks/useModal";
import { formatCurrency, getCurrencyIcon } from "@/utils/currency";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CoinDetailType extends FxRate {
  icon: any;
  isCrypto: boolean;
}
const WalletCoinDetails = ({ coin }: { coin: CoinDetailType }) => {
  const { showModal } = useModal();
  const bal = "317628.34";
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar
        rightButtonIcon={<FileTextIcon color="#7E7E7E" />}
        hasRightButton
        onPressRightButton={() =>
          showModal("statement_modal", {
            title: `${coin?.base_name} Wallet statement`,
          })
        }
        title={coin?.base_name + " wallet"}
      />

      <ScrollView showsVerticalScrollIndicator={false} className="mt-3">
        <View>
          <View className="items-center mt-6 gap-1">
            <Image
              source={coin?.icon}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <View className="flex-row items-center gap-2 mt-2.5">
              <Text className="font-sans text-primary-text">Balance</Text>
              <EyeOffIcon />
            </View>
            <Text className="font-sans-medium text-5xl text-secondary">
              {formatCurrency(Number(bal), coin?.base_symbol).split(".")[0]}.
              <Text className="text-[#8A8B8D]">
                {formatCurrency(Number(bal), coin?.base_symbol).split(".")[1]}
              </Text>
            </Text>
            <Text className="font-sans text-primary-text">
              ≈ {formatCurrency(Number(bal) * Number(coin?.sell_rate ?? 0))}
            </Text>
          </View>

          <View className="flex-row items-center gap-3 mt-10 mb-6">
            <Button
              title="Buy"
              addBottomGap={false}
              btnClass="!bg-secondary flex-1"
              onPress={() =>
                router.navigate({
                  pathname: coin?.isCrypto
                    ? "/wallets/trade-crypto"
                    : "/wallets/trade-fiat",
                  params: {
                    coin: JSON.stringify(coin),
                  },
                })
              }
              textClass="!text-primary !font-sans-medium"
            />
            <Button
              title="Sell"
              addBottomGap={false}
              onPress={() =>
                router.navigate({
                  pathname: coin?.isCrypto
                    ? "/wallets/trade-crypto/receive-crypto"
                    : "/wallets/trade-fiat/sell-fiat",
                  params: {
                    coin: JSON.stringify(coin),
                  },
                })
              }
              btnClass="!bg-secondary flex-1"
              textClass="!text-primary !font-sans-medium"
            />
            {coin?.isCrypto && (
              <Button
                title="Swap"
                addBottomGap={false}
                onPress={() => {
                  console.log("clicked");
                }}
                btnClass="!bg-transparent border border-secondary flex-1"
                textClass="!text-secondary !font-sans-medium"
              />
            )}
          </View>

          <View className="bg-[#F3F3F3] rounded-full py-1.5 px-3 justify-center items-center self-center">
            <Text className="font-sans-medium text-[#393939] text-sm">
              Buy {formatCurrency(Number(coin?.buy_rate))} · Sell{" "}
              {formatCurrency(Number(coin.sell_rate))} per{" "}
              {getCurrencyIcon(coin?.base_symbol)}1
            </Text>
          </View>
        </View>

        <View className="mt-6">
          <View className="flex-row items-center justify-between">
            <Text className="font-sans-medium text-[#393939]">
              Transaction History
            </Text>
            <Text className="font-sans-medium text-secondary-text text-sm">
              View all
            </Text>
          </View>

          <View className="gap-1 mt-3">
            {Array.from({ length: 12 }).map((_, index) => (
              <Pressable
                key={index}
                className="flex-row gap-2 p-4 bg-[#F6F6F6] rounded-full items-center"
              >
                <View className="bg-[#58C18533] w-10 h-10 rounded-full justify-center items-center">
                  <ArrowDownIcon />
                </View>
                <View className="flex-1 flex-row items-center justify-between">
                  <View className="flex-1 gap-1">
                    <Text className="font-sans-medium text-[#393939] text-sm">
                      Buy
                    </Text>
                    <Text className="font-sans-medium text-secondary-text text-xs">
                      Nov 12 · 08:24 AM
                    </Text>
                  </View>
                  <View className="gap-1">
                    <Text className="font-sans-medium text-[#393939] text-sm">
                      + $1830.00
                    </Text>
                    <View className="bg-[#58C18533] py-1.5 px-3 rounded-full">
                      <Text className="font-sans-medium text-[#39C795] text-xs">
                        Successful
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletCoinDetails;

const styles = StyleSheet.create({});
