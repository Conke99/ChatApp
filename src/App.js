import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/LoginPage/login";
import Register from "./pages/RegisterPage/register";
import MainPage from "./pages/MainPage/mainpage";
import { AuthProvider } from "./contexts/AuthContext";

import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
