import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddressStepOne = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Proof of address" />
      <View className="self-center items-center flex-row gap-1 my-6">
        <View className="py-3 px-6 rounded-full bg-[#FFF5E1]">
          <Text className="text-secondary font-sans text-sm">Address</Text>
        </View>
        <View className="h-0.5 bg-[#DDDDDD] w-5" />
        <View className="py-3 px-6 rounded-full bg-[#F6F6F6]">
          <Text className="text-secondary font-sans text-sm">File upload</Text>
        </View>
      </View>
      <ScrollView>
        <View className="mt-6 gap-6">
          <Text className="font-sans text-[#323232]">
            Enter address information.
          </Text>
          <View className="gap-6">
            <Input placeholder="Enter street address" />
            <Input placeholder="Enter street number" />
            <Input placeholder="Enter postal code" />
            <Input placeholder="Enter state of residence" />
            <Input placeholder="Enter country of residence" />
          </View>
        </View>
      </ScrollView>

      <Button
        onPress={() =>
          router.navigate("/(dashboard)/verifications/address/step-two")
        }
        title="Continue"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default AddressStepOne;

const styles = StyleSheet.create({});
