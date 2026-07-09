import { useModalStore } from "@/store/modal.store";
import LogoutModal from "./LogoutModal";
import PinModal from "./PinModal";
import SendOptions from "./SendOptions";
import ThemePicker from "./ThemePicker";

const ModalManager = () => {
  const { type, isVisible, payload } = useModalStore();

  if (!isVisible) {
    return null;
  }

  switch (type) {
    case "send_options":
      return <SendOptions />;
    case "trxn_pin_modal":
      return <PinModal />;
    case "theme_picker":
      return <ThemePicker />;
    case "logout_modal":
      return <LogoutModal />;

    default:
      return null;
  }
};

export default ModalManager;
