import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

export default function AppRoutes () {
    return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}