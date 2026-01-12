import { Route, Routes } from "react-router-dom";
import Calendar from "./components/Calendar/Calendar";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
// import MainPage from "./components/MainPage/MainPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route path="*" element={<LoginPage />} />
      <Route path="/" element={<Calendar />} />
    </Routes>
  );
}
