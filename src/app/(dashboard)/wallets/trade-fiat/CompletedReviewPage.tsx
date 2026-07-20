import Button from "@/components/ui/Button";
import { formatAmountDisplay } from "@/utils/format-currency";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
   SafeAreaView,
   useSafeAreaInsets,
} from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");
const CompletedReviewPage = ({
  type,
  details,
}: {
  type: "bank" | "user" | "buy_fiat" | "sell_fiat";
  details?: any;
}) => {
  const amount = "14000.21";
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <View className="flex-1 justify-end">
        <View className="justify-between">
          <View>
            <View className="justify-center items-center mb-10">
              <Image
                style={{ width: width / 2, aspectRatio: 1 / 1 }}
                source={require("@/assets/images/pending-3d.png")}
              />
            </View>
            <Text className="text-xl text-center font-sans-medium text-black">
              Deposit under review
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

          {type == "sell_fiat" && (
            <View className="gap-1 mt-4">
              <InfoRow label="Rate" value={"₦1,650 / $1"} />
              <InfoRow label="Recipient" value={details?.accountName} />
              <InfoRow label="Reference" value={"GG-USD-9973"} />
            </View>
          )}

          <View className="bg-[#FEF3D6] font-sans p-4 rounded-xl mb-10 mt-4">
            <Text className="font-sans-medium text-sm text-[#6E5900]">
              We are confirming your{" "}
              <Text className="font-sans-medium">$250.00</Text> deposit. Your
              Naira wallet is credited the moment our team matches it, usually
              within 30 minutes.
            </Text>
          </View>

          <Button
            title="Done"
            type="secondary"
            onPress={() => router.dismissTo("/(dashboard)/tabs")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompletedReviewPage;

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
