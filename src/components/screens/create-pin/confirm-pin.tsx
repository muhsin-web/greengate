import { useMe, useSetPin } from "@/api";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import PinKeypad from "@/components/ui/PinKeypad";
import { authenticateUser } from "@/store/user.store";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ConfirmPinScreen = ({
  pin,
  type = "guest",
  prev_pin,
}: {
  pin: string;
  prev_pin?: string;
  type: "auth_user" | "guest";
}) => {
  const [confirmpin, setConfirmpin] = React.useState("");

  const { data: user } = useMe();
  const createpin = useSetPin();

  const handleProceed = () => {
    if (pin != confirmpin) return;
    createpin.mutate(
      { pin },
      {
        onSuccess(data, variables, onMutateResult, context) {
          if (type == "auth_user") {
            router.dismiss(3);
          } else {
            authenticateUser(user?.data);
            router.navigate({ pathname: "/(dashboard)/tabs" });
          }
        },
      },
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title={type == "auth_user" ? "Change pin" : "Set your pin"} />

      <View className="flex-1 mt-6">
        <Text className="text-primary-text font-sans">
          {type == "auth_user"
            ? "Confirm your 4-digit code to protect your account"
            : "Confirm your 4-digit code to protect your account"}
        </Text>

        <View className="flex-1 justify-end mb-10">
          <PinKeypad value={confirmpin} onChange={(e) => setConfirmpin(e)} />
        </View>

        <Button
          onPress={handleProceed}
          title="Continue"
          btnClass="!bg-secondary"
          disabled={confirmpin.length < 4 || createpin.isPending}
          loading={createpin.isPending}
          textClass="!text-primary"
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmPinScreen;

const styles = StyleSheet.create({});
