import { cn } from "@/libs/cn";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RecentBenListItem from "./RecentBenListItem";

const tabs = ["Recent", "Beneficaries"];

interface RecentAndBeneficiarySectionProps {
  className?: string;
}

const RecentAndBeneficiarySection = ({
  className,
}: RecentAndBeneficiarySectionProps) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <View className={cn("", className)}>
      <View className="self-center mb-5 flex-row items-center bg-primary-accent-light rounded-full p-1.5 w-2/3">
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

      <View className="gap-3">
        {Array.from({ length: 10 }).map((_, idx) => (
          <RecentBenListItem key={idx} />
        ))}
      </View>
    </View>
  );
};

export default RecentAndBeneficiarySection;

const styles = StyleSheet.create({});
