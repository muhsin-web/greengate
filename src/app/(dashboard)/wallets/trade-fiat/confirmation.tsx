import { WalletType } from "@/components/screens/wallets";
import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { formatCurrency } from "@/utils/currency";
import { BlurView } from "expo-blur";
import { router, useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface TrxnDetails extends WalletType {
  amount: string;
  accountNumber: string;
  accountName: string;
  bankName: string;
}

const { height } = Dimensions.get("screen");
const Screen = () => {
  const { trxnDetails: details } = useLocalSearchParams<{
    trxnDetails: string;
  }>();
  const insets = useSafeAreaInsets();
  const trxnDetails: TrxnDetails = JSON.parse(details);

  const amt = Number(trxnDetails?.amount);
  const conversion = Number(amt) * 1200.12;
  return (
    <BlurView
      tint="dark"
      intensity={Platform.select({ android: 50, ios: 10 })}
      style={{ flex: 1, justifyContent: "flex-end" }}
    >
      <Pressable
        onPress={() => router.back()}
        style={[StyleSheet.absoluteFill]}
      />
      <View
        style={{ maxHeight: height * 0.8, paddingBottom: insets.bottom }}
        className="bg-white rounded-t-[48px] p-4"
      >
        <HeaderBar hasRightButton hideBackBtn title="Confirm purchase" />
        <ScrollView className="mt-4">
          <View className="gap-3">
            <View className="bg-[#F6F6F6] py-6 px-3 items-center rounded-full">
              <Text className="text-secondary text-sm font-sans-medium mb-2">
                You buy
              </Text>
              <Text className="font-sans-medium text-5xl text-secondary">
                {formatCurrency(amt)?.split(".")[0]}.
                <Text className="text-[#8A8B8D]">
                  {formatCurrency(amt)?.split(".")[1]}
                </Text>
              </Text>
            </View>

            <View className="bg-[#F6F6F6] py-6 px-3 items-center rounded-full">
              <Text className="text-secondary text-sm font-sans-medium mb-2">
                You pay
              </Text>
              <Text className="font-sans-medium text-5xl text-secondary">
                {formatCurrency(conversion, "NGN")?.split(".")[0]}.
                <Text className="text-[#8A8B8D]">
                  {formatCurrency(conversion, "ngn")?.split(".")[1]}
                </Text>
              </Text>
            </View>
          </View>

          <View className="gap-3 mt-3 mb-6">
            <InfoRow label="Recipient" value={trxnDetails?.accountName} />
            <InfoRow label="Bank" value={trxnDetails?.bankName} />
            <InfoRow
              label="Account number"
              value={trxnDetails?.accountNumber}
            />
            <InfoRow label="Recipient" value="₦1,650 / $1" />
          </View>

          <View className="mb-6">
            <Text className="text-[#525252] font-sans text-xs">
              The USD transfer is typically delivered to the recipient bank
              within 24 hours.
            </Text>
          </View>

          <Button
            onPress={() =>
              router.navigate({
                pathname: "/wallets/trade-fiat/success",
                params: {
                  details: JSON.stringify(trxnDetails),
                },
              })
            }
            title="Confirm & pay"
            type="secondary"
          />
        </ScrollView>
      </View>
    </BlurView>
  );
};

export default Screen;

const styles = StyleSheet.create({});

const InfoRow = ({
  label,
  icon,
  value,
}: {
  label: string;
  value: string;
  icon?: any;
}) => {
  return (
    <View className="flex-row items-center gap-3">
      <View className="">
        <Text className="text-secondary font-sans-medium text-sm">{label}</Text>
      </View>
      <View className="flex-1">
        <View className="flex-row self-end gap-1 items-center py-3 px-5 rounded-full bg-primary-accent-green">
          {icon && <View>{icon}</View>}
          <Text
            numberOfLines={1}
            ellipsizeMode="middle"
            className="text-secondary font-sans-medium text-sm"
          >
            {value}
          </Text>
        </View>
      </View>
    </View>
  );
};
