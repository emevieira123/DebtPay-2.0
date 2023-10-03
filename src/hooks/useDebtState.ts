import { create } from "zustand";

interface State {
  isOpen: boolean;
  debtId: string;
  setOpen: (isOpen: boolean, debtId: string) => void;
}

export const useDebtState = create<State>((set) => ({
  isOpen: false,
  debtId: "",
  setOpen: (isOpen: boolean, debtId: string) => set((state) => ({ ...state, isOpen, debtId })),
}));
