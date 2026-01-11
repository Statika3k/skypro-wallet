import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

 function AppRoutes () {
    return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes; 