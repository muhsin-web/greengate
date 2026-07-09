import { create } from "zustand";

export type ModalType =
  "send_options" | "trxn_pin_modal" | "theme_picker" | "logout_modal";

export type ModalPayloads = {
  send_options: undefined;
  logout_modal: undefined;
  premium_swap: {
    wallet_id?: string;
  };
  completed_message: {
    title?: string;
    desc?: string;
  };
  trxn_pin_modal: {
    desc?: string;
    title?: string;
  };
  theme_picker: undefined;
};

type ModalActions = {
  onConfirm?: (e?: string) => void;
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
