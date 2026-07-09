import { useModalStore } from "@/store/modal.store";
import {
  BottomSheet,
  Group,
  Host,
  RNHostView,
  VStack,
} from "@expo/ui/swift-ui";
import { presentationDragIndicator } from "@expo/ui/swift-ui/modifiers";
import { StyleSheet, Text, View } from "react-native";

const ModalWrapper = () => {
  const isVisible = useModalStore((s) => s.isVisible);
  const hideModal = useModalStore((s) => s.hideModal);

  console.log("here", isVisible);

  if (!isVisible) return null;

  return (
    <Host ignoreSafeArea="all" style={{ position: "absolute", width: "100%" }}>
      <VStack>
        <BottomSheet
          isPresented={isVisible}
          onIsPresentedChange={hideModal}
          fitToContents
        >
          <Group modifiers={[presentationDragIndicator("hidden")]}>
            <RNHostView matchContents>
              <View className="w-full bg-white p-4">
                <Text className="font-sans">Hello, world going!</Text>
                <Text className="font-sans">Hello, world going!</Text>
                <Text className="font-sans">Hello, world going!</Text>
                <Text className="font-sans">Hello, world going!</Text>
              </View>
            </RNHostView>
          </Group>
        </BottomSheet>
      </VStack>
    </Host>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({});
