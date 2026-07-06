import { cn } from "@/libs/cn";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  textClass?: string;
  btnClass?: string;
  icon?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
}

const Button = ({ icon, btnClass, textClass, title, ...rest }: ButtonProps) => {
  return (
    <Pressable
      className={cn(
        "h-14 bg-primary disabled:bg-primary/30 justify-center items-center rounded-full",
        btnClass && btnClass,
      )}
      {...rest}
    >
      {icon?.left && icon?.left}
      <Text className={cn("font-sans text-base text-secondary", textClass)}>
        {title || "Button"}
      </Text>
      {icon?.right && icon?.right}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
