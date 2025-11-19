import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./homePage/home";
import Games from "./games/games";
import Profile from "./profile/profile";
import Header from "./header";
import Footer from "./footer";
import "./styles.css";

//Layout element (basically just all site)
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

//Making router
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/game/*", element: <Games /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

//Making root
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
