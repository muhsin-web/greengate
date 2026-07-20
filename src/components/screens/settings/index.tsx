import { ArrowUpRightIcon } from "@/assets/svgs/ArrowUpRightIcon";
import { BellIcon } from "@/assets/svgs/BellIcon";
import { Checkmark3D } from "@/assets/svgs/CheckMark3D";
import { CircleHalfIcon } from "@/assets/svgs/CirclHalfIcon";
import { CopyIcon } from "@/assets/svgs/CopyIcon";
import { ExistIcon } from "@/assets/svgs/ExistIcon";
import { LockIcon } from "@/assets/svgs/LockIcon";
import { NotepadIcon } from "@/assets/svgs/NotepadIcon";
import { QuestIcon } from "@/assets/svgs/QuestIcon";
import { UserCircleIcon } from "@/assets/svgs/UserCircleIcon";
import BottomSpacer from "@/components/shared/BottomSpacer";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { useModal } from "@/hooks/useModal";
import { useUserStore } from "@/store/user.store";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsListButton } from "./cmps/SettingsListButton";

const SettingScreen = () => {
  const { showModal } = useModal();
  const user = useUserStore((s) => s.user);
  const fullname =
    user?.profile?.firstName && user?.profile?.firstName
      ? user?.profile?.firstName + " " + user?.profile?.lastName
      : "";
  return (
    <SafeAreaView className="bg-primary-foreground flex-1 px-4">
      <HeaderBar title="Settings" />
      <View className="flex-row my-4 gap-2.5 p-4 items-center rounded-full border border-border-stroke">
        <View className="w-11 h-11 rounded-full justify-center items-center bg-[#FFDBB8]">
          <Image
            style={{ width: 40, height: 40 }}
            source={require("@/assets/images/user-dp.png")}
          />
        </View>

        <View className="gap-1 flex-1">
          <View className="flex-row items-center gap-1">
            <Text className="text-xl font-sans-medium text-secondary">
              {fullname || "New user"}
            </Text>
            <CopyIcon />
          </View>
          <Text className="font-sans text-[#525252]">{user?.email}</Text>
        </View>
      </View>

      <ScrollView>
        {user?.kycTier == "tier0" && (
          <SettingsListButton
            className="bg-[#E1FFE5] mb-1"
            icon={<Checkmark3D />}
            title="KYC Verification needed"
            rightBtn={
              <Button
                onPress={() => router.navigate("/(dashboard)/verifications")}
                type="secondary"
                title="Verify"
                btnClass="!h-10 px-6"
              />
            }
          />
        )}
        <View className="gap-1">
          <SettingsListButton
            icon={<UserCircleIcon />}
            title="Personal details"
            onPress={() => router.navigate("/(dashboard)/user-profile")}
          />
          <SettingsListButton
            onPress={() => router.navigate("/(dashboard)/security")}
            icon={<LockIcon />}
            title="Security"
          />
          <SettingsListButton
            onPress={() => {
              showModal("theme_picker");
            }}
            icon={<CircleHalfIcon />}
            title="Display theme"
          />
          <SettingsListButton icon={<BellIcon />} title="Notification" />
          <SettingsListButton
            icon={<QuestIcon />}
            title="Help & Support"
            rightBtn={
              <Pressable>
                <ArrowUpRightIcon />
              </Pressable>
            }
          />
          <SettingsListButton icon={<NotepadIcon />} title="Terms of use" />

          <SettingsListButton
            onPress={() => {
              showModal("logout_modal");
            }}
            icon={<ExistIcon />}
            title="Log out"
          />
        </View>
        <BottomSpacer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
