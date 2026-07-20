import { ChevDownIcon } from "@/assets/svgs/ChevDownIcon";
import RecentAndBeneficiarySection from "@/components/screens/transfer/cmps/RecentAndBeneficiarySection";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TransferScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Bank account" />

      <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
        <View className="gap-4">
          <Input
            editable={Platform.select({ android: true, ios: false })}
            onFocus={() => router.navigate("/(dashboard)/transfer/banks")}
            onPress={() => router.navigate("/(dashboard)/transfer/banks")}
            placeholder="Select bank"
            leading={<ChevDownIcon />}
          />
          <Input placeholder="Enter accoint number" />
        </View>

        <RecentAndBeneficiarySection className="mt-6" />
      </ScrollView>

      <View className="pt-2 border-t border-border-stroke">
        <Button
          title="Continue"
          disabled
          btnClass="!bg-secondary"
          textClass="!text-primary"
          onPress={() =>
            router.navigate({
              pathname: "/(dashboard)/transfer/transfer-amount",
              params: {
                type: "bank",
              },
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({});
