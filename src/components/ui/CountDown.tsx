import { cn } from "@/libs/cn";
import { StyleSheet, Text, View } from "react-native";

const CountDown = ({
  className,
  count,
  onPress,
  isLoading,
}: {
  className?: string;
  count: number;
  isLoading: boolean;
  onPress: () => void;
}) => {
  const format = () => {
    const min = Math.floor(count / 60);
    const sec = count % 60;

    return `${min.toString().padStart(2, "0")}:${sec.toString()?.padStart(2, "0")}`;
  };
  return (
    <View className={cn("", className)}>
      <Text className="font-sans text-primary-text">
        Didn’t get it?{" "}
        <Text
          disabled={isLoading}
          onPress={onPress}
          className={cn(
            "text-[#AA9F9F] underline",
            count == 0 && "text-[#0DAE2B]",
          )}
        >
          {isLoading ? "resending..." : "Request OTP"}
        </Text>{" "}
        {count > 0 && `in ${format()}`}
      </Text>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({});
