import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-primary-foreground px-4">
      <HeaderBar title="Create account" />
      <ScrollView>
        <View className="my-6">
          <Text className="text-base font-sans text-primary-text">
            To create account enter the necessary information
          </Text>
        </View>

        <View className="gap-6">
          <Input
            placeholder="Enter email address"
            info={"Use an email you have access to"}
          />
          <Input isPassword placeholder="Enter password" />
          <Input isPassword placeholder="Confirm password" />
        </View>
      </ScrollView>

      <Button
        title="Continue"
        onPress={() => router.navigate({ pathname: "/auth/sign-up/verify" })}
        btnClass="!bg-secondary"
        textClass="!text-primary"
      />
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
