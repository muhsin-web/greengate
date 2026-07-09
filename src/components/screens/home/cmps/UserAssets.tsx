import { cn } from "@/libs/cn";
import { StyleSheet, Text, View } from "react-native";
import AssetListItem from "./AssetListItem";

const UserAssets = ({ className }: { className: string }) => {
  return (
    <View className={cn("gap-3", className)}>
      <Text className="font-sans-medium text-primary-text">My Assets</Text>
      <View className="gap-1">
        {Array.from({ length: 5 }).map((_, idx) => {
          return <AssetListItem key={idx} />;
        })}
      </View>
    </View>
  );
};

export default UserAssets;

const styles = StyleSheet.create({});
