import { Checkmark3D } from "@/assets/svgs/CheckMark3D";
import { Checkmark3DBlue } from "@/assets/svgs/CheckMark3DBlue";
import { Checkmark3DGold } from "@/assets/svgs/Checkmark3DGold";
import HeaderBar from "@/components/ui/HeaderBar";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VerificationCard from "./cmps/VerificationCard";

const verifications = [
  {
    title: "level 1",
    id: "1",
    path: "/(dashboard)/verifications/bvn",
    requirement: "BVN Verification",
    icon: Checkmark3D,
    colors: {
      btn: "#3E785D",
      bg: "#82C65E33",
      accent: "#2D83001A",
    },
  },
  {
    title: "level 2",
    id: "2",
    path: "/(dashboard)/verifications/nin",
    requirement: "NIN Verification",
    icon: Checkmark3DBlue,
    colors: {
      btn: "#3E785D",
      bg: "#73BBDD33",
      accent: "#004E831A",
    },
  },
  {
    title: "level 3",
    id: "3",
    path: "/(dashboard)/verifications/address",
    requirement: "Proof Of Address",
    icon: Checkmark3DGold,
    colors: {
      btn: "#3E785D",
      bg: "#C7A15433",
      accent: "#8371001A",
    },
  },
] as const;

export type Verification = (typeof verifications)[number];

const VerificationScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="KYC Verification" />

      <ScrollView showsVerticalScrollIndicator={false} className="my-4">
        <View className="gap-4">
          {verifications?.map((item, index) => (
            <VerificationCard key={index} data={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({});
