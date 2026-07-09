import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const RecentBenListItem = () => {
  return (
    <View className="flex-row items-center gap-2 bg-[#F6F6F6] p-2 rounded-full">
      <View className="flex-1 ml-3">
        <Text className="text-secondary text-sm font-sans-medium">
          Long John
        </Text>
        <Text className="!font-sans-medium text-secondary-text text-xs">
          Kuda Bank - 9887123342
        </Text>
      </View>

      <Image
        style={{ width: 40, height: 40, borderRadius: 20 }}
        source={require("@/assets/images/banks/kuda.jpg")}
      />
    </View>
  );
};

export default RecentBenListItem;

const styles = StyleSheet.create({});
