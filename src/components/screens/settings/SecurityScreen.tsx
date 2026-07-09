import { KeyIcon } from "@/assets/svgs/KeyIcon";
import { NumberpadIcon } from "@/assets/svgs/NumberPadIcon";
import { PasswordIcon } from "@/assets/svgs/PasswordIcon";
import { ScanSmileyIcon } from "@/assets/svgs/ScanSmileyIcon";
import HeaderBar from "@/components/ui/HeaderBar";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Switch, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsListButton } from "./cmps/SettingsListButton";

const SecurityScreen = () => {
  const [faceId, setFaceId] = React.useState(false);
  return (
    <SafeAreaView className="bg-primary-foreground flex-1 px-4">
      <HeaderBar title="Security" />

      <ScrollView className="my-4" showsVerticalScrollIndicator={false}>
        <View className="gap-1">
          <SettingsListButton
            rightBtn={<Switch value={faceId} onValueChange={setFaceId} />}
            icon={<ScanSmileyIcon />}
            title="Use Face ID"
          />
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
          <SettingsListButton icon={<NumberpadIcon />} title="Change pin" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecurityScreen;

const styles = StyleSheet.create({});
