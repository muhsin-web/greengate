import { QrCodeIcon } from "@/assets/svgs/QrCodeIcon";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GreengateUserTransfer = () => {
  const [username, setUsername] = React.useState("");
  return (
    <SafeAreaView className="flex-1 px-4 bg-primary-foreground">
      <HeaderBar title="Greengate user" />

      <ScrollView className="py-4" showsVerticalScrollIndicator={false}>
        <View>
          <Input
            onChangeText={setUsername}
            value={username}
            placeholder="Enter Greengate username/ID"
          />
        </View>

        <Pressable
          onPress={() =>
            router.navigate({
              pathname: "/(dashboard)/transfer/qr-code_scanner",
            })
          }
          className="py-5 px-6 flex-row items-center gap-2.5 rounded-full bg-[#F6F6F6] self-center mt-6"
        >
          <QrCodeIcon />
          <Text className="text-secondary font-sans text-lg">
            Scan QR code{" "}
          </Text>
        </Pressable>
      </ScrollView>

      <Button
        type="secondary"
        disabled={username?.length < 3}
        title="Continue"
        onPress={() => router.navigate("/(dashboard)/transfer/transfer-amount")}
        btnClass="!bg-"
      />
    </SafeAreaView>
  );
};

export default GreengateUserTransfer;

const styles = StyleSheet.create({});
