import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import CostAnalysis from "./components/CostAnalysis/CostAnalysis";
import PrivateRoute from "./components/PrivateRoute";
function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/analytics" element={<CostAnalysis />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRoutes;
