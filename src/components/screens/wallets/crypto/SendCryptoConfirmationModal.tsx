import Button from "@/components/ui/Button";
import HeaderBar from "@/components/ui/HeaderBar";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WalletType } from "..";

interface CryptoDetails extends WalletType {
  memo: string;
  address: string;
}
const SendCryptoConfirmationModal = ({
  details,
}: {
  details: CryptoDetails;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <BlurView tint="dark" style={{ justifyContent: "flex-end", flex: 1 }}>
      <Pressable
        style={[StyleSheet.absoluteFill]}
        onPress={() => router.back()}
      />
      <View className="bg-white rounded-t-[40px] p-4">
        <HeaderBar
          containerClass="!z-10"
          title="Confirm transfer"
          hasRightButton
          hideBackBtn
        />

        <View style={{ marginBottom: insets.bottom, marginTop: 16 }}>
          <View className="p-6 bg-primary-accent-lighter rounded-full">
            <Text className="text-5xl font-sans-medium text-secondary text-center">
              {details?.amount}
              {details?.code}
            </Text>
          </View>

          <View className="gap-3 mt-3">
            <InfoRow label="To" value={details?.address} />
            <InfoRow label="Memo" value={details?.memo} />
            <InfoRow label="Network fee" value={"0.00001" + details?.code} />
            <InfoRow label="Value" value={"≈ ₦209,195.00"} />
          </View>

          <View className="gap-6 mt-1.5">
            <Text className="text-secondary-textlight font-sans text-xs">
              Crypto transfers are irreversible. Double-check the address before
              sending.
            </Text>

            <Button
              onPress={() =>
                router.navigate({
                  pathname: "/wallets/trade-crypto/success",
                  params: {
                    details: JSON.stringify(details),
                  },
                })
              }
              title="Send now"
              type="secondary"
            />
          </View>
        </View>
      </View>
    </BlurView>
  );
};

export default SendCryptoConfirmationModal;

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
