import { AtIcon } from "@/assets/svgs/AtIcon";
import { CalendarDotIcon } from "@/assets/svgs/CalendarDotIcon";
import { Checkmark3D } from "@/assets/svgs/CheckMark3D";
import { EnvelopeIcon } from "@/assets/svgs/EnvelopeIcon";
import { GenderSexIcon } from "@/assets/svgs/GenderSexIcon";
import { MapPinIcon } from "@/assets/svgs/MapPinIcon";
import { PhoneIcon } from "@/assets/svgs/PhoneIcon";
import { UserCircleIcon } from "@/assets/svgs/UserCircleIcon";
import HeaderBar from "@/components/ui/HeaderBar";
import { useUserStore } from "@/store/user.store";
import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsListButton } from "../settings/cmps/SettingsListButton";

const ProfileScreen = () => {
  const user = useUserStore((s) => s.user);
  const fullname =
    user?.profile?.firstName && user?.profile?.firstName
      ? user?.profile?.firstName + " " + user?.profile?.lastName
      : "";
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Personal details" />

      <ScrollView className="mt-3" showsVerticalScrollIndicator={false}>
        <View className="justify-center items-center mb-8 gap-2.5">
          <View className="rounded-full justify-center items-center bg-[#FFDBB8]">
            <Image
              style={{ width: 60, height: 60 }}
              source={require("@/assets/images/user-dp.png")}
            />
          </View>
          <View className="flex-row items-center gap-2">
            <Text className="text-xl font-sans-medium text-secondary">
              {fullname || "New user"}
            </Text>
            <Checkmark3D size={20} />
          </View>
        </View>
        <View className="gap-1">
          <SettingsListButton
            icon={<UserCircleIcon />}
            title="Name"
            desc={`${user?.profile?.firstName || "New"} ${user?.profile?.lastName || "User"}`}
          />
          <SettingsListButton
            icon={<AtIcon />}
            title="Nickname"
            desc="ejembiii"
          />
          <SettingsListButton
            icon={<EnvelopeIcon />}
            title="Email"
            desc={user?.email}
          />
          <SettingsListButton
            icon={<GenderSexIcon />}
            title="Gender"
            desc="Male"
          />
          <SettingsListButton
            icon={<CalendarDotIcon />}
            title="Date of Birth"
            desc="18th - July - 1998"
          />
          <SettingsListButton
            icon={<PhoneIcon />}
            title="Phone number"
            desc={user?.phone}
            rightBtn={
              !user?.phoneVerified ? (
                <Pressable className="px-3 py-1.5 rounded-full bg-secondary">
                  <Text className="font-sans text-primary text-xs">Verify</Text>
                </Pressable>
              ) : null
            }
          />
          <SettingsListButton
            icon={<MapPinIcon color="#000" />}
            title="Home address"
            desc="Y68, King’s street, Lanmah Hold, Kaduna, Nigeria"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
