import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import KeyPad from "@/components/ui/KeyPad";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ConfirmPinScreen = ({ pin }: { pin: string }) => {
  const [confirmpin, setConfirmpin] = React.useState("");

  const handleProceed = () => {
    if (pin != confirmpin) return;
    router.navigate({ pathname: "/auth/forgot-password" });
  };

  console.log("old pin", pin, confirmpin);
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Set your pin" />

      <View className="flex-1 mt-6">
        <Text className="text-primary-text font-sans">
          Confirm your 4-digit code to protect your account
        </Text>

        <View className="flex-1 justify-end mb-10">
          <KeyPad value={confirmpin} onChange={(e) => setConfirmpin(e)} />
        </View>

        <Button
          onPress={handleProceed}
          title="Continue"
          btnClass="!bg-secondary"
          textClass="!text-primary"
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmPinScreen;

const styles = StyleSheet.create({});
