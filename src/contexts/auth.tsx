import { createContext, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types/authTypes";
import { LoginRequest, setAuthLocalStorage, setUserLocalStorage } from "./utils/localStorage";


export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);

  async function authenticated(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = {accessToken: response?.accessToken}

    const payloadUser = {
      id: response?.user?.id,
      name: response?.user?.name,
      email: response?.user?.email,
      github_user: response?.user?.github_user
    }

    setUser(response?.user);
    setAuthLocalStorage(payload)
    setUserLocalStorage(payloadUser);
  }

  function logout() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ user, authenticated, logout }}>
      {children}
    </AuthContext.Provider>
  )

}
