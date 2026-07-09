import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const AssetListItem = () => {
  return (
    <View className="bg-[#F6F6F6] flex-row rounded-full p-4 gap-2">
      <Image
        style={{ width: 40, height: 40, borderRadius: 20 }}
        contentFit="cover"
        source={require("@/assets/images/usa-flag.png")}
      />
      <View className="flex-1 flex-row items-center justify-between">
        <View className="gap-1">
          <Text className="font-sans-medium text-sm text-primary-text">
            Naira
          </Text>
          <Text className="text-secondary-text text-xs font-sans-medium">
            NGN
          </Text>
        </View>
        <Text className="font-sans text-sm text-primary-text">₦0.00</Text>
      </View>
    </View>
  );
};

export default AssetListItem;

const styles = StyleSheet.create({});
