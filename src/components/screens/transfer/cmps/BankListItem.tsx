import { cn } from "@/libs/cn";
import { bankImages } from "@/libs/data";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const BankListItem = ({
  data,
}: {
  data: { name: string; id: string; img_name: string };
}) => {
  return (
    <View
      className={cn(
        "bg-[#F6F6F6] flex-row items-center p-2 rounded-full gap-2",
      )}
    >
      <View className="size-11 rounded-full bg-white">
        {bankImages[data?.img_name] ? (
          <Image
            style={{ width: 32, height: 32, borderRadius: 16 }}
            source={bankImages?.[data?.img_name]}
            contentFit="contain"
          />
        ) : null}
      </View>
      <Text className="capitalize font-sans-medium text-secondary text-sm">
        {data?.name}
      </Text>
    </View>
  );
};

export default BankListItem;

const styles = StyleSheet.create({});
