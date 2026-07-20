import { FileTextIcon } from "@/assets/svgs/FileTextIcon";
import { MapPinIcon } from "@/assets/svgs/MapPinIcon";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");
const AddressInfo = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="BVN Verification" />

      <ScrollView>
        <View className="items-center mt-12">
          <Image
            style={{ width: width / 3.5, height: width / 3.5 }}
            source={require("@/assets/images/verification/address-banner.png")}
          />
          <Text className="font-sans-medium text-secondary mt-6 text-3xl text-center">
            Information needed to {"\n"}verify proof of address
          </Text>
        </View>

        <View className="gap-8 mt-10">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 bg-[#AF8C491A] rounded-full justify-center items-center">
              <MapPinIcon size={24} color="#AF8C49" />
            </View>
            <View className="flex-1 gap-1">
              <Text className="font-sans-medium text-secondary">
                Full house address
              </Text>
              <Text className="font-sans text-secondary-text text-sm">
                For regulatory requirements.
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 bg-[#AF8C491A] rounded-full justify-center items-center">
              <FileTextIcon size={24} color="#AF8C49" />
            </View>
            <View className="flex-1 gap-1">
              <Text className="font-sans-medium text-secondary">
                File upload
              </Text>
              <Text className="font-sans text-secondary-text text-sm">
                Upload your supporting documents.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Button
        onPress={() =>
          router.navigate("/(dashboard)/verifications/address/step-one")
        }
        title="Continue"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default AddressInfo;

const styles = StyleSheet.create({});
