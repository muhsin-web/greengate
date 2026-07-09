import { BellIcon } from "@/assets/svgs/BellIcon";
import { GlassButton } from "@/components/ui/GlassButton";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View className="justify-between flex-row items-center pb-2.5">
      <View className="flex-row items-center gap-3 flex-1">
        <View className="w-11 h-11 rounded-full justify-center items-center bg-[#FFDBB8]">
          <Image
            style={{ width: 40, height: 40 }}
            source={require("@/assets/images/user-dp.png")}
          />
        </View>
        <Text className="font-sans-medium text-lg">Hi, Devu</Text>
      </View>

      <GlassButton className="!w-10 !h-10">
        <BellIcon />
      </GlassButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
