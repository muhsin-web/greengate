import { KeyIcon } from "@/assets/svgs/KeyIcon";
import { NumberpadIcon } from "@/assets/svgs/NumberPadIcon";
import { PasswordIcon } from "@/assets/svgs/PasswordIcon";
import HeaderBar from "@/components/ui/HeaderBar";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BiometricButton from "./cmps/BiometricButton";
import { SettingsListButton } from "./cmps/SettingsListButton";

const SecurityScreen = () => {
  const [faceId, setFaceId] = React.useState(false);
  return (
    <SafeAreaView className="bg-primary-foreground flex-1 px-4">
      <HeaderBar title="Security" />

      <ScrollView className="my-4" showsVerticalScrollIndicator={false}>
        <View className="gap-1">
          <BiometricButton />
          <SettingsListButton
            onPress={() =>
              router.navigate("/(dashboard)/security/change-password")
            }
            icon={<PasswordIcon />}
            title="Change password"
          />
          <SettingsListButton
            onPress={() =>
              router.navigate("/(dashboard)/security/reset-password")
            }
            icon={<KeyIcon />}
            title="Reset password"
          />
          <SettingsListButton
            onPress={() => router.navigate("/(dashboard)/security/change-pin")}
            icon={<NumberpadIcon />}
            title="Change pin"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecurityScreen;

const styles = StyleSheet.create({});
