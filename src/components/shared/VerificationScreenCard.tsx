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
  onProceed?: () => void;
}

const VerificationScreenCard = ({
  title,
  onProceed,
}: VerificationScreenCardProps) => {
  const [otp, setOtp] = React.useState("");
  const { countdown, resetCounter } = useCounter({ count: 30 });

  const handleContinue = () => {
    onProceed!();
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
          <OtpInput length={5} value={otp} onChange={(e) => setOtp(e)} />
        </View>
        <CountDown className="mt-6" count={countdown} />
      </ScrollView>
      <Button
        title="Continue"
        onPress={handleContinue}
        btnClass="!bg-secondary"
        textClass="!text-primary"
      />
    </SafeAreaView>
  );
};

export default VerificationScreenCard;

const styles = StyleSheet.create({});
