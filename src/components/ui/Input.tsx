import { EyeOffIcon } from "@/assets/svgs/EyeCloseIcon";
import { EyeOpenIcon } from "@/assets/svgs/EyeOpenIcon";
import { cn } from "@/libs/cn";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  info?: string;
  error?: string;
  success?: string;
  isPassword?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const Input = ({
  leading,
  label,
  info,
  error,
  success,
  isPassword,
  trailing,
  className,
  containerClassName,
  ...rest
}: InputProps) => {
  const [isvisible, setVisible] = React.useState(true);
  return (
    <View className={cn(containerClassName)}>
      {label && <Text>Input</Text>}
      <View
        className={cn(
          "flex-row items-center border bg-primary-accent-light h-16 rounded-full px-4 py-1 border-border-stroke",
        )}
      >
        {trailing && trailing}
        <TextInput
          style={{ textAlignVertical: "center" }}
          className="h-12 flex-1 px-2 font-sans text-secondary"
          secureTextEntry={isPassword && isvisible}
          placeholderTextColor={"#999999"}
          {...rest}
        />
        {leading && leading}
        {isPassword && (
          <Pressable onPress={() => setVisible(!isvisible)}>
            {!isvisible ? <EyeOpenIcon /> : <EyeOffIcon />}
          </Pressable>
        )}
      </View>
      {error && <Text className="font-sans text-sm text-error">{error}</Text>}
      {info && (
        <Text className="font-sans text-sm text-secondary-textlight">
          {info}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
