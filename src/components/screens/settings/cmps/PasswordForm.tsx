import { useResetPassword } from "@/api";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { cn } from "@/libs/cn";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
// import MaterialCommunityIcons from '@expo/';

const rules = [
  {
    label: "At least 1 capital letter",
    test: (pw: string) => /[A-Z]/.test(pw),
  },
  { label: "At least 1 small letter", test: (pw: string) => /[a-z]/.test(pw) },
  { label: "At least 1 number", test: (pw: string) => /[0-9]/.test(pw) },
  {
    label: "At least 1 special character",
    test: (pw: string) => /[^A-Za-z0-9]/.test(pw),
  },
  { label: "Need at least 8 characters", test: (pw: string) => pw.length >= 8 },
];

const PasswordForm = ({
  title = "Create a new password to keep your account secure",
  onContinue,
  type = "new",
  email,
  otp,
}: {
  title?: string;
  otp?: string;
  email?: string;
  type?: "new" | "reset";
  onContinue: (data: { password: string; confirmPassword: string }) => void;
}) => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const ruleResults = rules.map((rule) => ({
    ...rule,
    passed: rule.test(password),
  }));

  console.log(email, otp);
  const allRulesPassed = ruleResults.every((r) => r.passed);
  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const canContinue = allRulesPassed && passwordsMatch;

  const resetPassword = useResetPassword();

  const handleReset = () => {
    if (!otp || !email) return;
    resetPassword.mutate(
      {
        code: otp,
        email,
        newPassword: password,
      },
      {
        onSuccess(data, variables, onMutateResult, context) {
          router.back();
        },
      },
    );
  };

  return (
    <View className="flex-1">
      <ScrollView className="my-4" showsVerticalScrollIndicator={false}>
        <Text className="font-sans mt-2 text-[#323232]">{title}</Text>
        <View className="gap-6 mt-6">
          <Input
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            isPassword
          />
          {password && (
            <View className="gap-2">
              {ruleResults?.map((rule, index) => (
                <View key={index} className="flex-row items-center gap-1.5">
                  <Text
                    className={cn(
                      "text-error font-sans text-sm",
                      rule.passed && "text-green-600",
                    )}
                  >
                    {rule?.label}
                  </Text>
                </View>
              ))}
            </View>
          )}
          <Input
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword
          />
        </View>
      </ScrollView>
      <Button
        disabled={!canContinue || resetPassword.isPending}
        onPress={handleReset}
        loading={resetPassword.isPending}
        type="secondary"
        title="Continue"
      />
    </View>
  );
};

export default PasswordForm;

const styles = StyleSheet.create({});
