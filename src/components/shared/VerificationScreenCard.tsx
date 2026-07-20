import { useResendEmailCode, useVerifyEmail } from "@/api";
import useCounter from "@/hooks/useCounter";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../ui/Button";
import CountDown from "../ui/CountDown";
import HeaderBar from "../ui/HeaderBar";
import OtpInput from "../ui/OtpInput";

interface VerificationScreenCardProps {
  title: string;
  type:
    | "LOGIN"
    | "RESET_PASSWORD"
    | "CREATE_ACCOUNT"
    | "AUTHENTICATED_RESET_PASSWORD";
  onProceed?: (pin?: string) => void;
  email?: string;
}

const VerificationScreenCard = ({
  title,
  onProceed,
  email,
  type,
}: VerificationScreenCardProps) => {
  const [otp, setOtp] = React.useState("");
  const { countdown, resetCounter } = useCounter({ count: 30 });

  const veriy = useVerifyEmail();
  const resend = useResendEmailCode();

  const handleContinue = () => {
    if (type == "RESET_PASSWORD") {
      onProceed!(otp);
      return;
    }
    veriy.mutate(
      {
        code: otp,
      },
      {
        onSuccess(data, variables, onMutateResult, context) {
          onProceed!();
        },
      },
    );
  };

  const handleResend = () => {
    resend.mutate(
      {},
      {
        onSettled(data, error, variables, onMutateResult, context) {
          resetCounter();
        },
      },
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title={title || "Reset password"} />

      <ScrollView>
        <View className="my-6">
          <Text className="font-sans text-primary-text">
            Please enter the 6-digit code sent to your email
          </Text>
        </View>

        <View>
          <OtpInput length={6} value={otp} onChange={(e) => setOtp(e)} />
        </View>
        <CountDown
          isLoading={resend.isPending}
          onPress={handleResend}
          className="mt-6"
          count={countdown}
        />
      </ScrollView>

      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={otp.length < 6}
        btnClass="!bg-secondary"
        textClass="!text-primary"
        loading={veriy.isPending}
      />
    </SafeAreaView>
  );
};

export default VerificationScreenCard;

const styles = StyleSheet.create({});
