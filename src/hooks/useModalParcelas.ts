import { create } from "zustand";

interface ModalState {
  visible: boolean;
  show: () => void;
  hide: () => void;
}

const useModalParcelas = create<ModalState>((set) => ({
  visible: false,
  show: () => { set(() => ({ visible: true })) },
  hide: () => { set(() => ({ visible: false, params: undefined })) }
}))

export default useModalParcelas;
