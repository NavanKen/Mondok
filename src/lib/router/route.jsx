import { createBrowserRouter } from "react-router-dom";
import LoginPages from "@/pages/auth/Login";
import MusyrifPage from "@/pages/Muysrif/Musyrif";
import NotFoundPage from "@/notfound";

export const routes = createBrowserRouter([
  {
    path: "/auth/login",
    element: <LoginPages />,
  },
  {
    path: "/musyrif/dashboard",
    element: <MusyrifPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
