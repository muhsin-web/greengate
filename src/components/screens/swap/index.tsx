import HeaderBar from "@/components/ui/HeaderBar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwapCardDropDown from "./cmps/SwapCardDropDown";

const SwapScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Swap" />

      <SwapCardDropDown />
    </SafeAreaView>
  );
};

export default SwapScreen;

const styles = StyleSheet.create({});
