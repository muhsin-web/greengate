import { useLogin, useMe } from "@/api";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { authenticateUser, onboardUser } from "@/store/user.store";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const login = useLogin();
  const user = useMe();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    login.mutate(
      {
        email,
        password,
      },
      {
        onSuccess(data, variables, onMutateResult, context) {
          onboardUser();
          console.log(JSON.stringify(data));
          if (!data?.user?.emailVerified) {
            router.navigate({ pathname: "/auth/sign-up/verify" });
            return;
          }
          if (!data?.user?.pinSet) {
            router.dismissTo("/auth/pin-setup");
            return;
          }
          authenticateUser(data?.user);
          router.navigate({ pathname: "/(dashboard)" });
        },
      },
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Login" />
      <ScrollView>
        <View className="mt-6 gap-6">
          <Text>Welcome back to Greengate</Text>

          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email address"
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            isPassword
          />

          <Pressable
            className="self-end"
            onPress={() =>
              router.navigate({
                pathname: "/auth/forgot-password",
              })
            }
          >
            <Text className="font-sans-medium text-secondary underline">
              Reset password?
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <Button
        title="Continue"
        onPress={handleLogin}
        btnClass="!bg-secondary"
        textClass="!text-primary"
        loading={login.isPending}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
