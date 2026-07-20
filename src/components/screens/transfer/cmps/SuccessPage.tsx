import Button from "@/components/ui/Button";
import { formatAmountDisplay } from "@/utils/format-currency";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");
const SuccessPage = ({
  type,
  details,
}: {
  type: "bank" | "user" | "buy_fiat" | "send_crypto";
  details?: any;
}) => {
  const amount = "14000.21";
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <View className="flex-1 justify-end">
        <View className="justify-between">
          <View>
            <View className="justify-center items-center mb-4">
              <Image
                style={{ width: width / 2, aspectRatio: 1 / 1 }}
                source={require("@/assets/images/success-3d_icon.png")}
              />
            </View>
            <Text className="text-xl text-center font-sans-medium text-black">
              Transaction Successful
            </Text>

            <View className="bg-[#F6F6F6] self-center mt-4 rounded-full py-4 px-6">
              <Text className="font-sans-medium text-secondary text-4xl text-center">
                ₦{formatAmountDisplay(amount)?.split(".")[0]}.
                <Text className="font-sans-medium text-[#8A8B8D] text-4xl text-center">
                  {formatAmountDisplay(amount)?.split(".")[1]}
                </Text>
              </Text>
            </View>
          </View>

          {type == "buy_fiat" && (
            <View className="gap-1 mt-4">
              <InfoRow label="Rate" value={"₦1,650 / $1"} />
              <InfoRow label="You paid" value={"₦412,500.00"} />
              <InfoRow label="Recipient" value={details?.accountName} />
              <InfoRow label="Reference" value={"GG-USD-9973"} />
            </View>
          )}

          {type == "send_crypto" && (
            <View className="mb-10">
              <View className="gap-1 mt-4">
                <InfoRow label="To" value={details?.address} />
                <InfoRow label="Network fee" value={"₦412,500.00"} />
              </View>
              <View className="bg-[#D6FED6] p-4 rounded-xl mt-4">
                <Text className="text-[#006E1A] font-sans text-sm">
                  301.00 XLM has been broadcast to the Stellar network. Usually
                  under 10 seconds.
                </Text>
              </View>
            </View>
          )}

          {type == "send_crypto" ? (
            <Button
              style={{ marginVertical: insets.bottom }}
              title="Done"
              type="secondary"
              onPress={() => router.dismissTo("/(dashboard)/tabs")}
            />
          ) : (
            <View
              style={{ marginVertical: insets.bottom }}
              className="flex-row gap-2"
            >
              <Pressable
                onPress={() =>
                  router.navigate({
                    pathname:
                      type == "buy_fiat"
                        ? "/wallets/trade-fiat/receipt"
                        : "/(dashboard)/transfer/receipt",
                    params: {
                      type,
                    },
                  })
                }
                className="bg-[#F6F6F6] items-center flex-1 rounded-full py-5"
              >
                <Text className="font-sans text-secondary">Receipt</Text>
              </Pressable>
              <Pressable
                onPress={() => router.dismissTo("/(dashboard)/tabs")}
                className="bg-[#F6F6F6] items-center flex-1 rounded-full py-5"
              >
                <Text className="font-sans text-secondary">Home</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({});

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <View className="p-4 rounded-full flex-row items-center justify-between gap-3 bg-[#F6F6F6]">
      <View className="flex-1">
        <Text className="font-sans text-sm text-secondary-text">{label}</Text>
      </View>
      <Text className="text-secondary font-sans-medium text-sm">{value}</Text>
    </View>
  );
};
