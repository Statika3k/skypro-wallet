import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { TaskProvider} from "./context/TaskProvider";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <TaskProvider> 
          <AppRoutes />
        </TaskProvider>
      </BrowserRouter>
    </>
  );
}
