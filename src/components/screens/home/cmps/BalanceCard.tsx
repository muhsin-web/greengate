import { EyeOffIcon } from "@/assets/svgs/EyeCloseIcon";
import { cn } from "@/libs/cn";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const tabs = ["fiat", "crypto"];

const BalanceCard = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <View>
      <View className="self-center flex-row items-center bg-primary-accent-light rounded-full p-1.5 w-2/3">
        {tabs.map((tab, index) => (
          <Pressable
            className={cn(
              "py-3 flex-1",
              tab == activeTab && "bg-white rounded-full",
            )}
            key={index}
            onPress={() => setActiveTab(tab)}
          >
            <Text className="capitalize font-sans-medium text-sm text-center">
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      <View className="items-center mt-6 gap-3">
        <View className="flex-row items-center gap-2">
          <Text className="font-sans text-primary-text">Balance</Text>
          <EyeOffIcon />
        </View>
        <Text className="font-sans-medium text-4xl text-secondary">
          ₦15,256.
          <Text className="text-[#8A8B8D]">78</Text>
        </Text>
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({});
