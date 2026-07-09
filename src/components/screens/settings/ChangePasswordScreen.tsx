import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePasswordScreen = () => {
  const [password, setPassword] = React.useState("");
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Change password" />

      <ScrollView className="my-4" showsVerticalScrollIndicator={false}>
        <View className="mt-2 gap-6">
          <Text className="font-sans text-[#323232]">
            Enter previous password to continue
          </Text>

          <Input
            value={password}
            onChangeText={setPassword}
            isPassword
            placeholder="Enter password"
          />
        </View>
      </ScrollView>

      <Button
        disabled={!password}
        onPress={() =>
          router.navigate({
            pathname: "/(dashboard)/security/change-password/new-password",
            params: {
              oldPassword: password,
            },
          })
        }
        title="Continue"
        type="secondary"
      />
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({});
