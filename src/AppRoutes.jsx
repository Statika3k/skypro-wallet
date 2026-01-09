export default function AppRoutes () {
    return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}