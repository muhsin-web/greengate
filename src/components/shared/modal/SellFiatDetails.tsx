import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useModalStore } from "@/store/modal.store";
import { StyleSheet, Text, View } from "react-native";
import ModalWrapper from "./modal-wrapper";

const SellFiatDetails = () => {
  const actions = useModalStore((s) => s.actions);
  const hideModal = useModalStore((s) => s.hideModal);

  const handleContinue = () => {
    actions?.onConfirm?.();
    hideModal();
  };
  return (
    <ModalWrapper title="Enter transaction reference">
      <View className="mt-4">
        <Text className="text-[#525252] font-sans mb-6">
          Paste the reference or narration from your USD transfer so our team
          can match your deposit during review.
        </Text>
        <Input placeholder="e.g. GG-USD-8842 " />

        <Button
          onPress={handleContinue}
          disabled
          title="Submit for review"
          type="secondary"
          btnClass="mt-6"
        />
      </View>
    </ModalWrapper>
  );
};

export default SellFiatDetails;

const styles = StyleSheet.create({});
