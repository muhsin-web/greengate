import { ChevForwardIcon } from "@/assets/svgs/ChevForward";
import { cn } from "@/libs/cn";
import { Pressable, Text, View } from "react-native";

export const SettingsListButton = ({
  icon,
  title,
  onPress,
  rightBtn,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
  onPress?: () => void;
  rightBtn?: React.ReactNode;
}) => {
  return (
    <Pressable
      onPress={() => {
        console.log("clicked");
        onPress!();
      }}
      className={cn(
        " bg-[#F6F6F6] flex-row p-4 rounded-full justify-between gap-2 items-center",
        className,
      )}
    >
      <View className="flex-1 flex-row items-center gap-3">
        <View className="bg-white w-10 h-10 rounded-full justify-center items-center">
          {icon && icon}
        </View>
        <Text className="font-sans-medium text-[#393939]">{title}</Text>
      </View>
      {rightBtn ? rightBtn : <ChevForwardIcon />}
    </Pressable>
  );
};
