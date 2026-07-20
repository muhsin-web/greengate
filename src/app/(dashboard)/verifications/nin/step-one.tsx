import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NinStepOne = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="NIN verification" />

      <ScrollView>
        <View className="mt-6 gap-6">
          <Text className="font-sans text-[#323232]">
            Enter National Identity Number.
          </Text>
          <View className="gap-6">
            <Input placeholder="e.g. 1234567890" />
          </View>
        </View>
      </ScrollView>

      <Button
        onPress={() =>
          router.navigate("/(dashboard)/verifications/bvn/step-three")
        }
        title="Continue"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default NinStepOne;

const styles = StyleSheet.create({});
