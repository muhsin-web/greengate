import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BvnStepOne = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="BVN verification" />
      <View className="self-center items-center flex-row gap-1 my-6">
        <View className="py-3 px-6 rounded-full bg-[#E1FFE5]">
          <Text className="text-secondary font-sans text-sm">Name</Text>
        </View>
        <View className="h-0.5 bg-[#DDDDDD] w-5" />
        <View className="py-3 px-6 rounded-full bg-[#F6F6F6]">
          <Text className="text-secondary font-sans text-sm">BVN</Text>
        </View>
        <View className="h-0.5 bg-[#DDDDDD] w-5" />
        <View className="py-3 px-6 rounded-full bg-[#F6F6F6]">
          <Text className="text-secondary font-sans text-sm">Facial</Text>
        </View>
      </View>

      <ScrollView>
        <View className="mt-6 gap-6">
          <Text className="font-sans text-[#323232]">
            Enter your name as it appears on record.
          </Text>
          <View className="gap-6">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
            <Input placeholder="Other name (If any)" />
          </View>
        </View>
      </ScrollView>

      <Button
        onPress={() =>
          router.navigate("/(dashboard)/verifications/bvn/step-two")
        }
        title="Continue"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default BvnStepOne;

const styles = StyleSheet.create({});
