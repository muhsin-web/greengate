import { ArrowLeftIcon } from "@/assets/svgs/ArrowLeftIcon";
import BottomSpacer from "@/components/shared/BottomSpacer";
import Button from "@/components/ui/Button";
import { useModal } from "@/hooks/useModal";
import { ImageBackground } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BalanceCard from "./cmps/BalanceCard";
import Header from "./cmps/Header";
import UserAssets from "./cmps/UserAssets";

const DashboardScreen = () => {
  const { showModal } = useModal();
  return (
    <SafeAreaView edges={["top"]} className="flex-1 px-4 bg-primary-foreground">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} className="py-4">
        <BalanceCard />

        <View className="flex-row items-center gap-3 mt-10 mb-6">
          <Button
            title="Send"
            addBottomGap={false}
            btnClass="!bg-secondary flex-1"
            textClass="!text-primary !font-sans-medium"
          />
          <Button
            title="Receive"
            addBottomGap={false}
            onPress={() => {
              console.log("clicked");
              showModal("send_options");
            }}
            btnClass="!bg-secondary flex-1"
            textClass="!text-primary !font-sans-medium"
          />
        </View>

        <ImageBackground
          source={require("@/assets/images/banner/kyc-banner.jpg")}
          style={[styles.banner]}
          contentFit="cover"
        >
          <View
            style={{
              experimental_backgroundImage:
                "linear-gradient(to bottom, #00000025, #000000df)",
            }}
            className="justify-end h-full absolute bottom-0 p-4 left-0 w-full"
          >
            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <Text className="text-white font-sans-medium">
                  Verify your account
                </Text>
              </View>
              <Button btnClass="!w-10 !h-10 rounded-full !bg-[#E9E9E9]">
                <ArrowLeftIcon />
              </Button>
            </View>
          </View>
        </ImageBackground>

        <UserAssets className="mt-6" />
        <BottomSpacer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  banner: {
    aspectRatio: 2 / 1,
    borderRadius: 25,
    overflow: "hidden",
  },
});
