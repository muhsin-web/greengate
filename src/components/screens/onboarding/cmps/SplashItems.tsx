import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("screen");
const SplashItems = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <View>
      <View className="flex-1" />
      <View>
        <Image
          style={{ width, height: width }}
          source={require("@/assets/images/splash-screen.png")}
        />
      </View>
      <View style={{ width }} className="px-10 gap-6">
        <Text className="font-sans-medium text-3xl text-center text-secondary">
          {title}
        </Text>
        <Text className="font-sans text-[#2B2B2B] text-center text-base">
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default SplashItems;

const styles = StyleSheet.create({});
