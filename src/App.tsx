import { BrowserRouter } from "react-router-dom"
import { Router } from "./infra/routes"
import { AuthProvider } from "./contexts/auth"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
