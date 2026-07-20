import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { useModal } from "@/hooks/useModal";
import { formatAmountDisplay } from "@/utils/format-currency";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TransferSummary = ({ type }: { type: "user" | "bank" }) => {
  const { showModal } = useModal();
  const amount = "14000.21";
  const insets = useSafeAreaInsets();

  const makeTransfer = async (pin: string) => {
    try {
      router.navigate({
        pathname: "/(dashboard)/transfer/success",
        params: {
          type,
        },
      });
    } catch (error) {}
  };
  return (
    <BlurView
      intensity={Platform.select({ ios: 12, android: 50 })}
      style={{ flex: 1, justifyContent: "flex-end" }}
      tint="dark"
    >
      <Pressable
        style={[StyleSheet.absoluteFill]}
        onPress={() => router.dismiss()}
      />
      <View className="bg-white rounded-t-[48px] p-4">
        <HeaderBar containerClass="z-10" title="Confirm transaction" />

        <View>
          <View className="bg-[#F6F6F6] rounded-full p-5 mt-6">
            <Text className="font-sans-medium text-secondary text-4xl text-center">
              ₦{formatAmountDisplay(amount)?.split(".")[0]}.
              <Text className="font-sans-medium text-[#8A8B8D] text-4xl text-center">
                {formatAmountDisplay(amount)?.split(".")[1]}
              </Text>
            </Text>
          </View>

          <View className="my-3 gap-3">
            <View className="flex-row items-center gap-2">
              <View className="flex-1">
                <Text className="text-secondary font-sans-medium text-sm">
                  Recipient
                </Text>
              </View>
              <View className="flex-row items-center gap-2 bg-primary-accent-green rounded-full p-1 pr-3">
                <View className="w-11 h-11 rounded-full justify-center items-center bg-[#FFDBB8]">
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("@/assets/images/user-dp.png")}
                  />
                </View>
                <Text className="font-sans-medium text-secondary text-sm">
                  ejembiii.greengate
                </Text>
              </View>
            </View>
            {type == "bank" && (
              <>
                <View className="flex-row items-center gap-2">
                  <View className="flex-1">
                    <Text className="text-secondary font-sans-medium text-sm">
                      Bank
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2 bg-primary-accent-green rounded-full p-1 pr-3">
                    <View className="w-8 h-8 rounded-full justify-center items-center bg-[#FFDBB8]">
                      <Image
                        style={{ width: 30, height: 30, borderRadius: 15 }}
                        source={require("@/assets/images/banks/first-bank.jpg")}
                      />
                    </View>
                    <Text className="font-sans-medium text-secondary text-sm">
                      First Bank of Nigeria
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center gap-2">
                  <View className="flex-1">
                    <Text className="text-secondary font-sans-medium text-sm">
                      Account number
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2 bg-primary-accent-green rounded-full py-4 px-6">
                    <Text className="font-sans-medium text-secondary text-sm">
                      3127864110
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
        <Button
          style={{ marginBottom: insets.bottom }}
          type="secondary"
          title="Send"
          onPress={() => {
            showModal(
              "trxn_pin_modal",
              {
                title: "Confirm pin",
                desc: `Transfer of ${formatAmountDisplay(amount)}`,
              },
              {
                onConfirm(e) {
                  makeTransfer(e as string);
                },
              },
            );
          }}
        />
      </View>
    </BlurView>
  );
};

export default TransferSummary;

const styles = StyleSheet.create({});

// const InRow =
