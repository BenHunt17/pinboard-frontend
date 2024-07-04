import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import App from "./App";
import NotesPage from "./pages/NotesPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <NotesPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  // {
  //   element: <Layout />,
  //   children: [{ path: "products", element: <Products /> }],
  // },
]);
