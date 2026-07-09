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
}

const Input = ({ leading, label, isPassword, ...rest }: InputProps) => {
  const [isvisible, setVisible] = React.useState(true);
  return (
    <View>
      {label && <Text>Input</Text>}
      <View
        className={cn(
          "flex-row items-center border bg-primary-accent-light h-16 rounded-full px-4 py-1 border-border-stroke",
        )}
      >
        <TextInput
          className="h-full bg-transparent flex-1 px-2 font-sans"
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
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
