import { IdentificationIcon } from "@/assets/svgs/IdentificationBadge";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");
const NinInfoScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="BVN Verification" />

      <ScrollView>
        <View className="items-center mt-12">
          <Image
            style={{ width: width / 3.5, height: width / 3.5 }}
            source={require("@/assets/images/verification/nin-banner.png")}
          />
          <Text className="font-sans-medium text-secondary mt-6 text-3xl text-center">
            Information needed to {"\n"}verify your NIN
          </Text>
        </View>

        <View className="gap-8 mt-10">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 bg-[#0062BE1A] rounded-full justify-center items-center">
              <IdentificationIcon size={24} color="#0062BE" />
            </View>
            <View className="flex-1 gap-1">
              <Text className="font-sans-medium text-secondary">
                National Identity Number
              </Text>
              <Text className="font-sans text-secondary-text text-sm">
                To ensure your information matches your NIN records.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Button
        onPress={() =>
          router.navigate("/(dashboard)/verifications/nin/step-one")
        }
        title="Continue"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default NinInfoScreen;

const styles = StyleSheet.create({});
