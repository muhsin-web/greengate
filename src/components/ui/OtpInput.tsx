import React from "react";
import {
   NativeSyntheticEvent,
   StyleSheet,
   TextInput,
   TextInputKeyPressEventData,
   View,
} from "react-native";

interface OtpInputProps {
  value: string;
  onChange: (e: string) => void;
  length: number;
}
const OtpInput = ({ value, onChange, length = 4 }: OtpInputProps) => {
  const inputRefs = React.useRef<Array<TextInput | null>>([]);

  const handleChangeText = (text: string, index: number) => {
    const digit = text.slice(-1).replace(/[^0-9]/g, "");
    const otpArray = value.split("");
    otpArray[index] = digit;
    const newValue = otpArray.join("").slice(0, length);
    onChange(newValue);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <View>
      <View className="flex-row gap-3">
        {Array.from({ length }).map((_, idx) => {
          return (
            <TextInput
              ref={(ref) => {
                inputRefs.current[idx] = ref;
              }}
              key={idx}
              placeholder="0"
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => handleChangeText(text, idx)}
              onKeyPress={(e) => handleKeyPress(e, idx)}
              className="flex-1 text-center text-secondary border bg-primary-accent-light text-2xl font-sans-medium border-border-stroke rounded-full aspect-square"
            />
          );
        })}
      </View>
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({});
