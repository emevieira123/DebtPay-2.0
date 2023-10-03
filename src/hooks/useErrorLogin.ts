import { create } from "zustand";

// interface ErrorLoginState {
//   isError: boolean;
//   showError: () => void;
//   hideError: () => void;
// }

// const useErrorLogin = create<ErrorLoginState>((set) => ({
//   isError: false,
//   showError: () => { set(() => ({ isError: true })) },
//   hideError: () => { set(() => ({ isError: false, params: undefined })) }
// }))

// export default useErrorLogin;

interface State {
  isError: boolean;
  errorType?: number;
  setError: (isError: boolean, errorType: number) => void;
}

export const useErrorLogin = create<State>((set) => ({
  isError: false,
  errorType: undefined,
  setError: (isError: boolean, errorType: number) => set((state) => ({ ...state, isError, errorType })),
}));
