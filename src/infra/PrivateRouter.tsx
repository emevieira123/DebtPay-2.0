import { useNavigate } from "react-router-dom";
import { getAuthLocalStorage } from "../contexts/utils/localStorage";
import { Login } from "../pages/Login";

export const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const authLocalStorage = getAuthLocalStorage();
  const navigate = useNavigate();

  if (!authLocalStorage?.accessToken) {
    navigate("/login");
    return <Login />;
  }

  return children;
};
