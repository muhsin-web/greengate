import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import PinKeypad from "@/components/ui/PinKeypad";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PreviousPin = () => {
  const [pin, setPin] = React.useState("");
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Change pin" />

      <View className="flex-1 mt-6">
        <Text className="text-primary-text font-sans">
          Please enter current pin to continue
        </Text>

        <View className="flex-1 justify-end mb-10">
          <PinKeypad value={pin} onChange={(e) => setPin(e)} />
        </View>

        <Button
          title="Continue"
          btnClass="!bg-secondary"
          onPress={() =>
            router.navigate({
              pathname: "/(dashboard)/security/change-pin/create-new",
              params: { prev_pn: pin },
            })
          }
          textClass="!text-primary"
        />
      </View>
    </SafeAreaView>
  );
};

export default PreviousPin;

const styles = StyleSheet.create({});
