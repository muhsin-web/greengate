import { CopyIcon } from "@/assets/svgs/CopyIcon";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { Image } from "expo-image";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { WalletType } from "..";

const { width } = Dimensions.get("screen");
const ReceiveCryptoScreen = ({ details }: { details: WalletType }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView className="flex-1 px-4 bg-primary-foreground">
      <HeaderBar title={"Receive " + details?.code} />

      <ScrollView className="mt-3" showsVerticalScrollIndicator={false}>
        <View className="items-center mt-7 gap-3">
          <Image
            style={{
              width: width / 1.5,
              height: width / 1.5,
              borderWidth: 3,
              borderColor: "#F3F3F3",
              borderRadius: 12,
            }}
            source={require("@/assets/images/qr-code.png")}
          />
          <View className="bg-primary-accent-lighter rounded-full py-1.5 px-3">
            <Text className="text-secondary-text font-sans-medium text-sm">
              Stellar network
            </Text>
          </View>
        </View>

        <View className="mt-6">
          <View className="p-4 rounded-xl bg-primary-accent-lighter mb-4">
            <Text className="text-secondary-textlight font-sans text-sm">
              GDQP2KPQGKIHYJGXNUIYOMHARUARCA7DJT5FO2FFOOKY3B2WSQHG4W37
            </Text>
          </View>

          <View className="flex-row gap-4">
            <Button
              btnClass="flex-row gap-2"
              style={{ flex: 1.5 }}
              type="secondary"
            >
              <CopyIcon color="#5FFC7C" />
              <Text className="text-primary font-sans text-sm">
                Copy address
              </Text>
            </Button>
            <Button
              btnClass="flex-row gap-2 !bg-primary-accent-lighter"
              style={{ flex: 1 }}
              type="secondary"
            >
              <CopyIcon color="#000000" />
              <Text className="text-secondary font-sans text-sm">Share</Text>
            </Button>
          </View>
        </View>

        <View className="p-4 bg-[#FEF3D6] rounded-xl gap-4 mt-4">
          <Text className="text-sm font-sans text-[#6E5900]">
            Memo required
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-sm font-sans-medium text-[#6E5900]">
              1002 8845
            </Text>
            <CopyIcon color="#6E5900" />
          </View>
          <Text className="text-sm font-sans text-[#6E5900]">
            Both the address and this memo are needed. Deposits without the memo
            cannot be credited automatically.
          </Text>
        </View>

        <View className="gap-1 my-4">
          <InfoRow value="Stellar network" label="Network" />
          <InfoRow value={"1" + details?.code} label="Minimum deposit" />
          <InfoRow value="Usually under 10 seconds" label="Arrival" />
        </View>

        <View
          style={{ marginBottom: insets.bottom }}
          className="p-4 gap-6 rounded-xl border border-[#EDEDED]"
        >
          <Text className="text-sm font-sans text-secondary">
            Before you send
          </Text>
          <View className="gap-6">
            <InlineRow value="Send only XLM on the Stellar network to this address." />
            <InlineRow value="Always include the memo — deposits without it cannot be credited automatically and may be lost." />
            <InlineRow value="Send at least 1 XLM. Smaller deposits are not credited." />
            <InlineRow value="Sending any other asset or using another network results in permanent loss." />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReceiveCryptoScreen;

const styles = StyleSheet.create({});

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <View className="p-4 rounded-full flex-row items-center justify-between gap-3 bg-[#F6F6F6]">
      <View className="flex-1">
        <Text className="font-sans text-sm text-secondary-text">{label}</Text>
      </View>
      <Text className="text-secondary font-sans-medium text-sm">{value}</Text>
    </View>
  );
};

const InlineRow = ({ value }: { value: string }) => {
  return (
    <View className="flex-row items-start gap-2">
      <View className="w-2 h-2 bg-[#D74A04] rounded-2xl" />
      <View className="flex-1 -mt-1.5">
        <Text className="text-sm font-sans text-secondary-textlight">
          {value}
        </Text>
      </View>
    </View>
  );
};
