import ModalManager from "@/components/shared/modal/ModalManager";
import { useModalStore } from "@/store/modal.store";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const AppLayout = () => {
  const isVisible = useModalStore((s) => s.isVisible);

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{ headerShown: false, gestureEnabled: !isVisible }}
      />
      <ModalManager />
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
