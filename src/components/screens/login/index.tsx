import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Reset password" />
      <ScrollView>
        <View className="mt-6 gap-6">
          <Text>To create account enter the necessary information</Text>

          <Input placeholder="Enter email address" />
          <Input placeholder="Enter password" isPassword />
        </View>
      </ScrollView>
      <Button
        title="Continue"
        onPress={() => router.navigate({ pathname: "/auth/login/verify" })}
        btnClass="!bg-secondary"
        textClass="!text-primary"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
