import Button from "@/components/ui/Button";
import { useModalStore } from "@/store/modal.store";
import { deleteUserLocalSetting } from "@/store/user-local_settings.store";
import { logoutUser } from "@/store/user.store";
import { StyleSheet, Text, View } from "react-native";
import ModalWrapper from "./modal-wrapper";

const LogoutModal = () => {
  const actions = useModalStore((s) => s.actions);
  const hideModal = useModalStore((s) => s.hideModal);
  const userId = "muhsin_12@";

  const logout = () => {
    hideModal();
    logoutUser();
    deleteUserLocalSetting(userId);
  };
  return (
    <ModalWrapper title="Log out">
      <View className="mt-4">
        <Text className="text-center font-sans text-[#525252]">
          Are you sure you want to log out?
        </Text>

        <View className="flex-row gap-3 items-center mt-5">
          <Button
            onPress={hideModal}
            btnClass="!bg-[#F6F6F6] flex-1"
            textClass="!text-secondary"
            title="Cancel"
          />

          <Button
            onPress={logout}
            btnClass="!bg-error-bg flex-1"
            textClass="!text-error"
            title="Logout"
          />
        </View>
      </View>
    </ModalWrapper>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({});
