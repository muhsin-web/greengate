import { cn } from "@/libs/cn";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface ButtonProps extends PressableProps {
  title?: string;
  type?: "secondary" | "primary";
  children?: React.ReactNode;
  textClass?: string;
  btnClass?: string;
  icon?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  addBottomGap?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  icon,
  btnClass,
  textClass,
  type = "primary",
  title,
  disabled,
  addBottomGap = true,
  ...rest
}: ButtonProps) => {
  return (
    <Pressable
      className={cn(
        "h-14 justify-center items-center rounded-full",
        btnClass && btnClass,
        addBottomGap && "mb-2",
        type == "primary" && "bg-primary",
        type == "secondary" && "bg-secondary",
        disabled && "!bg-[#142B071A]",
      )}
      {...rest}
    >
      {icon?.left && icon?.left}
      {title ? (
        <Text
          className={cn(
            "font-sans text-base",
            textClass,
            type == "primary" && "text-secondary",
            type == "secondary" && "text-primary",
            disabled && "!text-secondary-text",
          )}
        >
          {title || "Button"}
        </Text>
      ) : (
        children
      )}
      {icon?.right && icon?.right}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
