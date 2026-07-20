import { ArrowClockWise } from "@/assets/svgs/ArrowClockWisee";
import Button from "@/components/ui/Button";
import { ModalPayloads, useModalStore } from "@/store/modal.store";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ModalWrapper from "./modal-wrapper";

const { width } = Dimensions.get("screen");
const SwapReviewModal = () => {
  const payload = useModalStore(
    (s) => s.payload as ModalPayloads["swap_review"],
  );
  return (
    <ModalWrapper title="Review swap">
      <View>
        <View className="flex-row justify-center items-center mt-6">
          <Image style={[styles.icon]} source={payload?.from?.icon} />
          <Image
            style={[styles.icon, { marginLeft: -(width / 12) }]}
            source={payload?.to?.icon}
          />
        </View>

        <View className="flex-row gap-3 justify-center items-center my-4">
          <View className="absolute z-10 w-10 h-10 rounded-full justify-center items-center border-4 border-white">
            <ArrowClockWise />
          </View>
          <View className="bg-[#F6F6F6] h-16 rounded-full flex-1 items-center justify-center">
            <Text className="font-sans-medium text-secondary text-xl">
              {payload.amount} {payload.from.code}
            </Text>
          </View>
          <View className="bg-[#F6F6F6] h-16 rounded-full flex-1 items-center justify-center">
            <Text className="font-sans-medium text-secondary text-xl">
              {payload.amount} {payload.to.code}
            </Text>
          </View>
        </View>

        <Button title="Continue" type="secondary" />
      </View>
    </ModalWrapper>
  );
};

export default SwapReviewModal;

const styles = StyleSheet.create({
  icon: {
    width: width / 4,
    height: width / 4,
    borderRadius: width / 8,
  },
});
