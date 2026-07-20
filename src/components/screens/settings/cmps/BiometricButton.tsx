import { QuestIcon } from "@/assets/svgs/QuestIcon";
import { ScanSmileyIcon } from "@/assets/svgs/ScanSmileyIcon";
import { useModal } from "@/hooks/useModal";
import { cn } from "@/libs/cn";
import {
   updateLocalSettings,
   useUserLocalSettingStore,
} from "@/store/user-local_settings.store";
import * as LocalAuthentication from "expo-local-authentication";
import React from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";

const BiometricButton = () => {
  const { showModal } = useModal();
  const [hasBio, setHasBio] = React.useState(false);
  const [hasEnrolled, setHasEnrolled] = React.useState(false);
  const userId = "muhsin_12@";
  const { users } = useUserLocalSettingStore();

  React.useEffect(() => {
    (async () => {
      try {
        const [hasbio, hasenrolled, level] = await Promise.all([
          LocalAuthentication.isEnrolledAsync(),
          LocalAuthentication.hasHardwareAsync(),
          LocalAuthentication.getEnrolledLevelAsync(),
        ]);

        console.log(hasbio, hasenrolled, level);
        setHasBio(hasbio);
        setHasEnrolled(hasenrolled);
      } catch (error) {
        setHasBio(false);
      }
    })();
  }, []);

  if (!hasBio || !hasEnrolled) {
    return (
      <View className="bg-error-bg py-3 flex-row items-center justify-center gap-2 px-3 rounded-full">
        <QuestIcon color="#ef4444" />
        <Text className="font-sans text-error text-sm text-center">
          {hasBio && !hasEnrolled
            ? "You have not set up FingerPint or Face ID on your device."
            : "No FingerPrint or Face ID on this device"}
        </Text>
      </View>
    );
  }

  const handleToggle = async (e: boolean, pin: string) => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        biometricsSecurityLevel: "strong",
        disableDeviceFallback: true,
        cancelLabel: "Cancel",
        promptDescription:
          "GreenGate will use your biometric for Login and completing Transaction",
        promptMessage: "Biometric setup",
      });
      if (result.success) {
        if (e) {
          updateLocalSettings({
            userId,
            data: {
              isBiometricEnabled: true,
              trxnPin: pin,
            },
          });
        } else {
          updateLocalSettings({
            userId,
            data: {
              isBiometricEnabled: false,
              trxnPin: "",
            },
          });
        }
      }
    } catch (error) {}
  };

  console.log(users);

  return (
    <Pressable
      onPress={() => {}}
      className={cn(
        " bg-[#F6F6F6] flex-row p-4 rounded-full justify-between gap-2 items-center",
      )}
    >
      <View className="flex-1 flex-row items-center gap-3">
        <View className="bg-white w-10 h-10 rounded-full justify-center items-center">
          <ScanSmileyIcon />
        </View>
        <View className="flex-1">
          <Text className="font-sans-medium text-[#393939]">
            {"Use Face ID"}
          </Text>
        </View>
      </View>
      <Switch
        value={users?.[userId]?.isBiometricEnabled}
        onValueChange={(e) =>
          showModal(
            "trxn_pin_modal",
            {
              desc: "System biometric",
              title: "Biometric setup",
            },
            {
              onConfirm(pin) {
                handleToggle(e, pin);
              },
            },
          )
        }
      />
    </Pressable>
  );
};

export default BiometricButton;

const styles = StyleSheet.create({});
