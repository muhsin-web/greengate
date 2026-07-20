import { useModalStore } from "@/store/modal.store";
import LogoutModal from "./LogoutModal";
import PinModal from "./PinModal";
import SellFiatDetails from "./SellFiatDetails";
import SendOptions from "./SendOptions";
import StatemenModal from "./StatemenModal";
import SwapAssetsModal from "./SwapAssetsModal";
import SwapReviewModal from "./SwapReviewModal";
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
    case "swap_assest_picker":
      return <SwapAssetsModal />;
    case "swap_review":
      return <SwapReviewModal />;
    case "sell_fiat_ref":
      return <SellFiatDetails />;
    case "statement_modal":
      return <StatemenModal />;

    default:
      return null;
  }
};

export default ModalManager;
