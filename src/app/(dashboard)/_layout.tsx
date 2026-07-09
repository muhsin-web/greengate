import ModalManager from "@/components/shared/modal/ModalManager";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const AppLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <ModalManager />
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
