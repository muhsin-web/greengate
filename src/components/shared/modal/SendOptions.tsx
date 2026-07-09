import { BankIcon } from "@/assets/svgs/BankIcon";
import { GreengateGrayIcon } from "@/assets/svgs/GreengateGrayIcon";
import { useModalStore } from "@/store/modal.store";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ModalWrapper from "./modal-wrapper";

const SendOptions = () => {
  const hideModal = useModalStore((s) => s.hideModal);
  return (
    <ModalWrapper title={"Send to"}>
      <View className="gap-1">
        <Pressable
          onPress={() => {
            hideModal();
            router.navigate({
              pathname: "/(dashboard)/transfer/send_to_greengate_user",
            });
          }}
          className="p-4 gap-2 flex-row items-center bg-[#F6F6F6] rounded-full"
        >
          <View className="bg-white w-10 h-10 justify-center items-center rounded-full">
            <GreengateGrayIcon />
          </View>
          <View className="flex-1">
            <Text className="font-sans-medium text-secondary text-sm">
              Greengate user
            </Text>
            <Text className="font-sans text-secondary-text text-sm">
              Transfer with Greengate username/ID.
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            hideModal();
            router.navigate({ pathname: "/(dashboard)/transfer" });
          }}
          className="p-4 gap-2 flex-row items-center bg-[#F6F6F6] rounded-full"
        >
          <View className="bg-white w-10 h-10 justify-center items-center rounded-full">
            <BankIcon />
          </View>
          <View className="flex-1">
            <Text className="font-sans-medium text-secondary text-sm">
              Bank account
            </Text>
            <Text className="font-sans text-secondary-text text-sm">
              Works just like your regular bank account.
            </Text>
          </View>
        </Pressable>
      </View>
    </ModalWrapper>
  );
};

export default SendOptions;

const styles = StyleSheet.create({});
