import PinKeypad from "@/components/ui/PinKeypad";
import { useModalStore } from "@/store/modal.store";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ModalWrapper from "./modal-wrapper";

const { height } = Dimensions.get("screen");
const PinModal = () => {
  const [pin, setPin] = React.useState("");
  const actions = useModalStore((s) => s.actions);
  const hideModal = useModalStore((s) => s.hideModal);

  React.useEffect(() => {
    if (pin.length == 4) {
      actions?.onConfirm!(pin);
      hideModal();
    }
  }, [pin]);
  return (
    <ModalWrapper title="Enter pin">
      <View style={{ height: height * 0.7, justifyContent: "flex-end" }}>
        <View>
          <PinKeypad onChange={(e) => setPin(e)} value={pin} />
        </View>
      </View>
    </ModalWrapper>
  );
};

export default PinModal;

const styles = StyleSheet.create({});
