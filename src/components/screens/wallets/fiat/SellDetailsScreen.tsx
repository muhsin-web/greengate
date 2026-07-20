import { CopyIcon } from "@/assets/svgs/CopyIcon";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { useModal } from "@/hooks/useModal";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SellDetailsScreen = () => {
  const { showModal } = useModal();
  return (
    <SafeAreaView className="flex-1 px-4 bg-primary-foreground">
      <HeaderBar title="Make your deposit" />
      <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
        <View>
          <Text className="font-sans text-[#142B07]">
            Send exactly $250.00 - Receive{" "}
            <Text className="text-[#39C795]">₦405,000.00</Text>
          </Text>

          <View className="gap-1 my-6">
            <InRow label="Account name" value="Greengate Inc" />
            <InRow label="Bank" value="Community Federal Savings Bank" />
            <InRow label="Account number" value="8312 0047 71" />
            <InRow label="Reference" value="GG-USD-8842" />
            <InRow label="Account name" value="Greengate Inc" />
          </View>

          <View className="bg-[#FEF3D6] font-sans p-4 rounded-xl">
            <Text className="font-sans-medium text-sm text-[#6E5900]">
              Include the reference{" "}
              <Text className="font-sans-medium">GG-USD-8842</Text> in your
              transfer narration and send from an account in your own name.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="gap-2.5">
        <Button
          onPress={() =>
            showModal("sell_fiat_ref", undefined, {
              onConfirm(e) {
                router.navigate({
                  pathname: "/wallets/trade-fiat/success",
                  params: {
                    details: JSON.stringify({ status: "pending" }),
                  },
                });
              },
            })
          }
          title="I have sent it"
          type="secondary"
        />
        <Button btnClass="!bg-[#F6F6F6] text-secondary" title="Cancel" />
      </View>
    </SafeAreaView>
  );
};

export default SellDetailsScreen;

const styles = StyleSheet.create({});

const InRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <View className="flex-row gap-3 px-6 py-4 bg-[#F6F6F6] rounded-full">
      <View className="flex-1">
        <Text className="text-[#8A8B8D] font-sans-medium text-xs">{label}</Text>
        <Text className="font-sans-medium text-[#393939] text-sm">{value}</Text>
      </View>
      <CopyIcon color="#1A4B4A" />
    </View>
  );
};
