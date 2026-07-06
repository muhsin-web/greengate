import { cn } from "@/libs/cn";
import { StyleSheet, View } from "react-native";

const Indicator = ({
  current,
  length,
}: {
  current: number;
  length: number;
}) => {
  return (
    <View className="flex-row items-center gap-1 justify-center mb-5 mt-10">
      {Array.from({ length }).map((_, idx) => (
        <View
          key={idx}
          className={cn(
            "h-1 w-5 rounded-full bg-[#D9D9D9]",
            current == idx && "bg-black",
          )}
        />
      ))}
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({});
