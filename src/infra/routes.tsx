import { Navigate, Route, Routes } from "react-router-dom";
// import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { PrivateRouter } from "./PrivateRouter";

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        } />
        <Route path='*' element={<Navigate to='/' replace/>}/>
      </Route>
    </Routes>
  )
}
