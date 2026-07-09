import { SearchIcon } from "@/assets/svgs/SearchIcon";
import HeaderBar from "@/components/ui/HeaderBar";
import { cn } from "@/libs/cn";
import BankList from "@/libs/data/banks.json";
import React from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import BankListItem from "./cmps/BankListItem";

const Banks = () => {
  const header = React.useCallback(() => {
    return <SearchBar />;
  }, []);
  return (
    <View className="p-4">
      <HeaderBar title="Select bank" />

      <FlatList
        data={BankList}
        ListHeaderComponent={header}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={({ item }) => <BankListItem data={item} />}
      />
    </View>
  );
};

export default Banks;

const SearchBar = () => {
  return (
    <View
      style={{
        shadowColor: "rgba(0,0,0,0.09)",
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 8,
        shadowOffset: { width: 12, height: 15 },
      }}
      className={cn(
        "rounded-full border border-white px-4 flex-row gap-2 my-4 items-center bg-[#FFFFFF33]",
      )}
    >
      <SearchIcon />
      <TextInput
        placeholder="Select bank"
        className="h-12 flex-1 text-vertical-center"
        placeholderTextColor={"#999999"}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
