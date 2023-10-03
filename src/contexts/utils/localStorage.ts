/* eslint-disable @typescript-eslint/no-explicit-any */
// import Swal from "sweetalert2";
import { URLS } from "../../services/URLS";
import { api } from "../../services/api";
import { IUser } from "../types/authTypes";

interface LoginProps {
  email?: string;
  accessToken?: string;
}

export function setAuthLocalStorage(accessToken: LoginProps | null) {
  localStorage.setItem("@2023_DebtPay", JSON.stringify(accessToken));
}

export function getAuthLocalStorage() {
  const json = localStorage.getItem("@2023_DebtPay");

  if (json) {
    return JSON.parse(json);
  }
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("@2023_DebtPayUser", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("@2023_DebtPayUser");

  if (json) {
    return JSON.parse(json);
  }
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post(URLS.LOGIN_API, {
      email,
      password,
    });

    return request.data;
  } catch (error: any) {
    if (error.response.status === 401 || error.response.status === 404) {
      return console.log(`Verifique se o login e a senha estão corretos ou se o usuário se encontra cadastrado e ativo!`)
    } else if (error.response.status === 500) {
      return console.log("Erro: Falha na comunicação com o servidor!");
    }
  }
}
