import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import DashBoard from "./Components/Pages/Dashboard.jsx";
import Application from "./Components/Pages/application.jsx";
import Interview from "./Components/Pages/interviews.jsx";
import Deadline from "./Components/Pages/deadlines.jsx";
import Settings from "./Components/Pages/settings.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <DashBoard /> },
  { path: "/applications", element: <Application /> },
  { path: "/interviews", element: <Interview /> },
  { path: "/deadlines", element: <Deadline /> },
  { path: "/settings", element: <Settings /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
