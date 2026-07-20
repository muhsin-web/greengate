import { BellIcon } from "@/assets/svgs/BellIcon";
import { GiftBoxIcon } from "@/assets/svgs/GiftBoxIcon";
import { GlassButton } from "@/components/ui/GlassButton";
import { useUserStore } from "@/store/user.store";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  const user = useUserStore((s) => s.user);

  console.log(JSON.stringify(user, null, 2), "here");
  return (
    <View className="justify-between flex-row items-center pb-2.5">
      <View className="flex-row items-center gap-3 flex-1 mt-3">
        <View className="w-11 h-11 rounded-full justify-center items-center bg-[#FFDBB8]">
          <Image
            style={{ width: 40, height: 40 }}
            source={require("@/assets/images/user-dp.png")}
          />
        </View>
        <Text className="font-sans-medium text-lg">
          Hi, {user?.profile?.firstName || "New user"}
        </Text>
      </View>

      <View className="flex-row items-center gap-2">
        <GlassButton
          onPress={() => router.navigate({ pathname: "/referals" })}
          className="!w-10 !h-10"
        >
          <GiftBoxIcon color="#7E7E7E" />
        </GlassButton>
        <GlassButton className="!w-10 !h-10">
          <BellIcon />
        </GlassButton>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
