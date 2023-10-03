import { create } from "zustand";

interface DrawerState {
  visible: boolean;
  show: () => void;
  hide: () => void;
}

const useDrawerRegisterDebt = create<DrawerState>((set) => ({
  visible: false,
  show: () => { set(() => ({ visible: true })) },
  hide: () => { set(() => ({ visible: false, params: undefined })) }
}))

export default useDrawerRegisterDebt;
