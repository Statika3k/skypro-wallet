import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { TaskProvider } from "./context/TaskProvider";
import { GlobalStyles } from "./styles/GlobalStyles";
import AuthProvider from "./context/AuthProvider";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <AuthProvider>
          <TaskProvider>
            <AppRoutes />
          </TaskProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
