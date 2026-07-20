import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { formatAmountDisplay } from "@/utils/format-currency";
import { Image } from "expo-image";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");
const Receipt = ({ type }: { type: "user" | "bank" | "buy_fiat" }) => {
  const amount = "14000.21";
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Receipt" />

      <ScrollView>
        <View className="bg-[#F3F4F6] rounded-3xl p-4 mt-3">
          <Image
            style={{
              width: width / 5,
              height: width / 5,
              marginHorizontal: "auto",
              marginTop: 20,
            }}
            source={require("@/assets/images/app-logo/g-logo.png")}
          />

          <View className="bg-[#FCFCFC] my-6 self-center rounded-full py-3 px-6 mt-6">
            <Text className="font-sans-medium text-secondary text-4xl text-center">
              ₦{formatAmountDisplay(amount)?.split(".")[0]}.
              <Text className="font-sans-medium text-[#8A8B8D] text-4xl text-center">
                {formatAmountDisplay(amount)?.split(".")[1]}
              </Text>
            </Text>
          </View>

          <View className="gap-3">
            <View className="flex-row items-center gap-2">
              <View className="flex-1">
                <Text className="text-secondary font-sans-medium text-sm">
                  Account number
                </Text>
              </View>
              <View className="flex-row items-center gap-2 bg-[#FCFCFC] rounded-full py-3 px-6">
                <Text className="font-sans-medium text-secondary text-sm">
                  3127864110
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-2">
              <View className="flex-1">
                <Text className="text-secondary font-sans-medium text-sm">
                  Bank
                </Text>
              </View>
              <View className="flex-row items-center gap-2 bg-[#FCFCFC] rounded-full py-3 px-6">
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
              <View className="flex-row items-center gap-2 bg-[#FCFCFC] rounded-full py-3 px-6">
                <Text className="font-sans-medium text-secondary text-sm">
                  3127864110
                </Text>
              </View>
            </View>
            {type == "buy_fiat" && (
              <>
                <View className="flex-row items-center gap-2">
                  <View className="flex-1">
                    <Text className="text-secondary font-sans-medium text-sm">
                      Rate
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2 bg-[#FCFCFC] rounded-full py-3 px-6">
                    <Text className="font-sans-medium text-secondary text-sm">
                      ₦1,650 / $1
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center gap-2">
                  <View className="flex-1">
                    <Text className="text-secondary font-sans-medium text-sm">
                      You buy
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2 bg-[#FCFCFC] rounded-full py-3 px-6">
                    <Text className="font-sans-medium text-secondary text-sm">
                      $250.00
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center gap-2">
                  <View className="flex-1">
                    <Text className="text-secondary font-sans-medium text-sm">
                      You paid
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2 bg-[#FCFCFC] rounded-full py-3 px-6">
                    <Text className="font-sans-medium text-secondary text-sm">
                      ₦412,500.00
                    </Text>
                  </View>
                </View>
              </>
            )}

            <View className="flex-row items-center gap-2">
              <View className="flex-1">
                <Text className="text-secondary font-sans-medium text-sm">
                  Date
                </Text>
              </View>
              <View className="flex-row items-center gap-2 bg-[#FCFCFC] rounded-full py-3 px-6">
                <Text className="font-sans-medium text-secondary text-sm">
                  Jul 3rd, 2026 - 8:12 AM
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-2">
              <View className="flex-1">
                <Text className="text-secondary font-sans-medium text-sm">
                  Transaction no.
                </Text>
              </View>
              <View className="flex-row items-center gap-2 bg-[#FCFCFC] rounded-full py-3 px-6">
                <Text className="font-sans-medium text-secondary text-sm">
                  1234567890987654321
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Button style={{ marginBottom: 12 }} type="secondary" title="Share" />
    </SafeAreaView>
  );
};

export default Receipt;

const styles = StyleSheet.create({});
