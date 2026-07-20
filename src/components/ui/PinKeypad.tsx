import { BackSpaceIcon } from "@/assets/svgs/BackSpaceIcon";
import { ScanSmileyIcon } from "@/assets/svgs/ScanSmileyIcon";
import { cn } from "@/libs/cn";
import keys from "@/libs/data/keypad-keys.json";
import { useUserLocalSettingStore } from "@/store/user-local_settings.store";
import * as LocalAuthentication from "expo-local-authentication";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

interface KeyPadProps {
  onChange: (e: string) => void;
  value: string;
}

const { width } = Dimensions.get("screen");
const PinKeypad = ({ value, onChange }: KeyPadProps) => {
  const userId = "muhsin_12@";
  const users = useUserLocalSettingStore((s) => s.users);

  const userBiometricSettings = users?.[userId];
  const onKeyPress = (key: string) => {
    if (value.length == 4) return;
    onChange(value + key);
  };

  const handleBackspace = () => {
    onChange(value?.slice(0, -1));
  };

  const handleBiometric = async () => {
    console.log(userBiometricSettings?.trxnPin);
    try {
      const result = await LocalAuthentication.authenticateAsync({
        biometricsSecurityLevel: "strong",
        disableDeviceFallback: true,
        cancelLabel: "Cancel",
        promptDescription:
          "GreenGate will use your biometric for Login and completing Transaction",
        promptMessage: "Biometric setup",
      });
      if (result?.success) {
        onChange(userBiometricSettings?.trxnPin);
      }
    } catch (error) {}
  };

  return (
    <View style={{ width: width * 0.75 }} className="self-center">
      <View className="mb-10 flex-row gap-5 justify-center">
        {Array.from({ length: 4 }).map((_, idx) => (
          <View
            key={idx}
            className={cn(
              "w-5 h-5 rounded-full bg-[#D9D9D9]",
              idx <= value.length - 1 && "bg-secondary",
            )}
          />
        ))}
      </View>
      <Text className="font-sans text-center text-primary-text">Enter pin</Text>
      <View className="mt-6">
        {keys.map((row, index) => (
          <View key={index} className="flex-row">
            {row.map((key, idx) => {
              if (key == "id") {
                if (userBiometricSettings?.isBiometricEnabled) {
                  return (
                    <Pressable
                      onPress={handleBiometric}
                      key={"bio_user_key"}
                      className="flex-1 justify-center items-center"
                    >
                      <ScanSmileyIcon size={40} />
                    </Pressable>
                  );
                }
                return <View className="flex-1" key={"unknown"} />;
              }
              if (key == "back") {
                return (
                  <Pressable
                    onPress={() => handleBackspace()}
                    key={`key_${key}_${row}`}
                    className="flex-1 justify-center items-center aspect-[1/0.8]"
                  >
                    <BackSpaceIcon />
                  </Pressable>
                );
              }
              return (
                <Pressable
                  onPress={() => onKeyPress(key)}
                  key={`key_${key}_${row}`}
                  className="flex-1 justify-center items-center aspect-[1/0.8]"
                >
                  <Text className="!font-sans-medium text-3xl">{key}</Text>
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default PinKeypad;

const styles = StyleSheet.create({});
