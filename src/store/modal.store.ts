import { AssetType } from "@/components/shared/modal/SwapAssetsModal";
import { create } from "zustand";

export type ModalType =
  | "send_options"
  | "trxn_pin_modal"
  | "theme_picker"
  | "logout_modal"
  | "swap_assest_picker"
  | "statement_modal"
  | "sell_fiat_ref";

export type ModalPayloads = {
  statement_modal: {
    title?: string;
  };
  premium_swap: {
    wallet_id?: string;
  };
  swap_review: {
    from: AssetType;
    to: AssetType;
    amount: string;
  };
  swap_assest_picker: {
    selected?: AssetType | null;
  };
  completed_message: {
    title?: string;
    desc?: string;
  };
  trxn_pin_modal: {
    desc?: string;
    title?: string;
  };
  sell_fiat_ref: undefined;
  theme_picker: undefined;
  send_options: undefined;
  logout_modal: undefined;
};

type ModalActions = {
  onConfirm?: (e?: string | any) => void;
  onCancel?: () => void;
  onClose?: () => void;
};

interface ModalState {
  isVisible: boolean;
  type: keyof ModalPayloads | null;
  payload: ModalPayloads[keyof ModalPayloads] | undefined;
  actions?: ModalActions;

  showModal: <T extends keyof ModalPayloads>(
    type: T,
    payload?: ModalPayloads[T],
    actions?: ModalActions,
  ) => void;
  hideModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isVisible: false,
  type: null,
  payload: undefined,

  showModal: (type, payload, actions) =>
    set({
      isVisible: true,
      type,
      payload,
      actions,
    }),

  hideModal: () =>
    set({
      isVisible: false,
      type: null,
      payload: undefined,
      actions: undefined,
    }),
}));
