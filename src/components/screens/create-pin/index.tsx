import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import KeyPad from "@/components/ui/KeyPad";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreatePinScreen = () => {
  const [pin, setPin] = React.useState("");
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Set your pin" />

      <View className="flex-1 mt-6">
        <Text className="text-primary-text font-sans">
          Please enter the 4-digit code to protect your account
        </Text>

        <View className="flex-1 justify-end mb-10">
          <KeyPad value={pin} onChange={(e) => setPin(e)} />
        </View>

        <Button
          title="Continue"
          btnClass="!bg-secondary"
          onPress={() =>
            router.navigate({
              pathname: "/auth/pin-setup/confirm-pin",
              params: { pin },
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
