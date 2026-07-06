import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import KeyPad from "@/components/ui/KeyPad";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen = () => {
  const [pin, setPin] = React.useState("");
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Enter your pin" />
      <View className="mt-6">
        <Text className="font-sans text-primary-text">
          Please enter your 4-digit code to access account
        </Text>
      </View>
      <View className="flex-1 justify-end">
        <KeyPad value={pin} onChange={(e) => setPin(e)} />
      </View>
      <Button
        title="Continue"
        onPress={() => router.replace("/(dashboard)/tabs")}
        btnClass="!bg-secondary"
        textClass="!text-primary"
      />
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({});
