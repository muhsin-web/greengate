import { useModalStore } from "@/store/modal.store";

type UseModalProps = {
  onHide?: () => void;
};

export const useModal = ({ onHide = () => {} }: UseModalProps = {}) => {
  const showModal = useModalStore((state) => state.showModal);
  const hide = useModalStore((state) => state.hideModal);
  const hideModal = () => {
    console.log("in here");
    onHide();
    hide();
  };

  return {
    showModal,
    hideModal,
  };
};
