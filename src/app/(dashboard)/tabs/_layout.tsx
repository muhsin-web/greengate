import FloatingTabLayout from "@/components/tab-bars/FloatingTabBar";
import NativeTabBar from "@/components/tab-bars/NativeTabBar";
import { Platform, StyleSheet } from "react-native";

function supportsLiquidGlass() {
  if (Platform.OS !== "ios") return false;
  const majorVersion = parseInt(Platform.Version as string, 10);
  return majorVersion >= 26;
}

export default function TabLayout() {
  return supportsLiquidGlass() ? <NativeTabBar /> : <FloatingTabLayout />;
}

const styles = StyleSheet.create({});
