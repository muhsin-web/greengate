import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Reset password" />

      <ScrollView className="pt-6">
        <View className="gap-6">
          <Text className="font-sans text-primary-text">
            Create a new password to keep your account secure
          </Text>
          <Input isPassword placeholder="Enter password" />
          <Input isPassword placeholder="Confirm password" />
        </View>
      </ScrollView>

      <Button
        title="Continue"
        onPress={() => router.navigate({ pathname: "/auth/pin-setup" })}
        btnClass="!bg-secondary"
        textClass="!text-primary"
      />
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({});
