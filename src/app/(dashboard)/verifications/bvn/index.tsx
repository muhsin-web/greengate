import { BankIcon } from "@/assets/svgs/BankIcon";
import { SignatureIcon } from "@/assets/svgs/SignatureIcon";
import { SmileIcon } from "@/assets/svgs/SmileIcon";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");
const BvnInfoScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="BVN Verification" />

      <ScrollView>
        <View className="items-center mt-12">
          <Image
            style={{ width: width / 3.5, height: width / 3.5 }}
            source={require("@/assets/images/verification/bvn-banner.png")}
          />
          <Text className="font-sans-medium text-secondary mt-6 text-3xl text-center">
            Details required for {"\n"}BVN verification
          </Text>
        </View>

        <View className="gap-8 mt-10">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 bg-[#E2F5ED] rounded-full justify-center items-center">
              <SignatureIcon size={24} color="#00BE71" />
            </View>
            <View className="flex-1 gap-1">
              <Text className="font-sans-medium text-secondary">
                Legal full name
              </Text>
              <Text className="font-sans text-secondary-text">
                First name, last name and other name.
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 bg-[#E2F5ED] rounded-full justify-center items-center">
              <BankIcon size={24} color="#00BE71" />
            </View>
            <View className="flex-1 gap-1">
              <Text className="font-sans-medium text-secondary">
                Bank verification number
              </Text>
              <Text className="font-sans text-secondary-text">
                To verify your identity
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 bg-[#E2F5ED] rounded-full justify-center items-center">
              <SmileIcon size={24} color="#00BE71" />
            </View>
            <View className="flex-1 gap-1">
              <Text className="font-sans-medium text-secondary">
                Facial verification
              </Text>
              <Text className="font-sans text-secondary-text">
                To validate BVN facial identity.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Button
        onPress={() =>
          router.navigate("/(dashboard)/verifications/bvn/step-one")
        }
        title="Continue"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default BvnInfoScreen;

const styles = StyleSheet.create({});
