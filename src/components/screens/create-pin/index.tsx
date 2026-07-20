import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import PinKeypad from "@/components/ui/PinKeypad";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreatePinScreen = ({
  type,
  prev_pin,
}: {
  prev_pin?: string;
  type?: "auth_user" | "guest";
}) => {
  const [pin, setPin] = React.useState("");

  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title={type == "auth_user" ? "Change pin" : "Set your pin"} />

      <View className="flex-1 mt-6">
        <Text className="text-primary-text font-sans">
          {type == "auth_user"
            ? "Please enter new 4-digit code to protect your account"
            : "Please enter the 4-digit code to protect your account"}
        </Text>

        <View className="flex-1 justify-end mb-10">
          <PinKeypad value={pin} onChange={(e) => setPin(e)} />
        </View>

        <Button
          title="Continue"
          btnClass="!bg-secondary"
          onPress={() =>
            router.navigate({
              pathname:
                type == "auth_user"
                  ? "/(dashboard)/security/change-pin/confirm-pin"
                  : "/auth/pin-setup/confirm-pin",
              params: { pin, prev_pin },
            })
          }
          textClass="!text-primary"
        />
      </View>
    </SafeAreaView>
  );
};

export default CreatePinScreen;

const styles = StyleSheet.create({});
