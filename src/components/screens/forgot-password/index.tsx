import { useForgotPassword } from "@/api";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import Input from "@/components/ui/Input";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPasswordScreen = ({
  type = "visitor",
  onContinue,
}: {
  type: "auth_user" | "visitor";
  onContinue?: (e: string) => void;
}) => {
  const forgotPassword = useForgotPassword();
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    forgotPassword.mutate(
      { email },
      {
        onSuccess(data, variables, onMutateResult, context) {
          onContinue!(email);
        },
      },
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Reset password" />

      <ScrollView className="pt-6">
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email address"
          info="Use the email linked to your account"
        />

        <View className="bg-error-bg p-4 rounded-xl mt-6">
          <Text className="font-sans text-center text-error text-sm">
            After reset withdrawals will be on hold for 12 hours
          </Text>
        </View>
      </ScrollView>

      <Button
        title="Send code"
        disabled={forgotPassword.isPending || !email}
        onPress={handleSubmit}
        textClass="!text-primary"
        btnClass="!bg-secondary"
        loading={forgotPassword.isPending}
      />
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
