import { ArrowRightIcon } from "@/assets/svgs/ArrowRightIcon";
import { CopyIcon } from "@/assets/svgs/CopyIcon";
import { DollarCircleIcon } from "@/assets/svgs/DollarCircleIcon";
import { GiftBoxIcon } from "@/assets/svgs/GiftBoxIcon";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { Image } from "expo-image";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import {
   SafeAreaView,
   useSafeAreaInsets,
} from "react-native-safe-area-context";

const avatars = [
  {
    img: require("@/assets/images/avatars/avatar-1.png"),
    bg: "#C0D9BF",
  },
  {
    img: require("@/assets/images/avatars/avatar-2.png"),
    bg: "#D9B7F3",
  },
  {
    img: require("@/assets/images/avatars/avatar-3.png"),
    bg: "#FFCC8A",
  },
  {
    img: require("@/assets/images/avatars/avatar-4.png"),
    bg: "#849BD6",
  },
];
const { width } = Dimensions.get("screen");
const ReferralScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-primary-foreground px-4">
      <HeaderBar title="Refer & earn" />
      <ScrollView showsVerticalScrollIndicator={false} className="mt-3">
        <ScrollView horizontal className="mt-3 mb-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              style={{
                width: width * 0.25,
                height: width * 0.25,
                borderRadius: width * 0.125,
                marginLeft: index > 0 ? -12 : 0,
                backgroundColor: avatars[index % avatars.length]?.bg,
              }}
              source={avatars[index % avatars.length]?.img}
            />
          ))}
        </ScrollView>

        <View className="bg-secondary p-4 rounded-[30px]">
          <View className="flex-row mb-4 items-center gap-3">
            <View className="size-9 bg-[#00000033] rounded-full justify-center items-center">
              <GiftBoxIcon color="#5FFC7C" />
            </View>
            <Text className="font-sans-medium text-2xl text-white">
              Give ₦1,000, get ₦1,000
            </Text>
          </View>

          <Text className="font-sans text-sm text-[#C6FFD0]">
            Invite a friend to Greengate. When they verify and top up ₦5,000 or
            more, you are both credited ₦1,000 instantly.
          </Text>

          <View className="my-6 bg-[#00000033] border border-dashed border-primary rounded-2xl p-4">
            <Text className="text-primary font-sans-medium text-sm mb-2">
              Your code
            </Text>
            <View className="flex-row items-center justify-between">
              <Text className="font-sans-medium text-2xl text-white">
                EJEMBIIIGG26
              </Text>
              <CopyIcon color="#5FFC7C" />
            </View>
          </View>

          <Button title="Share invite link" />
        </View>

        <View className="bg-[#D5FFBE] p-4 rounded-full flex-row items-center gap-3 my-6">
          <DollarCircleIcon />
          <View className="flex-1 flex-row justify-between items-center gap-3">
            <View className="flex-1">
              <Text className="text-secondary font-sans">Reward History</Text>
              <Text className="text-[#2E7E00] text-sm font-sans">
                View all earnings from your referrals
              </Text>
            </View>
            <ArrowRightIcon color="#142B07" />
          </View>
        </View>

        <View
          style={{ marginBottom: insets.bottom }}
          className="gap-6 p-4 rounded-xl border border-[#EDEDED]"
        >
          <Text className="text-secondary font-sans text-sm">
            {"How it works"}
          </Text>
          <View className="gap-6">
            <InfoRow
              number="1"
              title="Share your code"
              desc="Send your invite link to friends who move money between Naira, foreign currency and crypto."
            />
            <InfoRow
              number="2"
              title="They sign up and verify"
              desc="Your friend creates their wallet with your code and completes ID verification."
            />
            <InfoRow
              number="3"
              title="You both get ₦1,000"
              desc="The moment they top up ₦5,000 or more, both wallets are credited instantly."
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReferralScreen;

const styles = StyleSheet.create({});

const InfoRow = ({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) => {
  return (
    <View className="flex-row gap-2">
      <View className="size-7 bg-secondary justify-center items-center rounded-full">
        <Text className="text-primary font-sans text-sm">{number}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-secondary font-sans text-sm">{title}</Text>
        <Text className="text-xs font-sans text-secondary-textlight">
          {desc}
        </Text>
      </View>
    </View>
  );
};
