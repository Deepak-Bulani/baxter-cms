import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./src/components/Layout/Layout";
import AddUser from "./src/components/user/AddUser";
import AccountSetting from "./src/components/accounts/AccountSetting";
import ClinicalHome from "./src/components/clinical/ClinicalHome"
import App from "./src/App"
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "user",
        element: <AccountSetting />,
      },
      {
        path: "clinical",
        element: <ClinicalHome />,
      },
      {
        path: "adequest",
        element: <AddUser />,
      },
      {
        path: "app",
        element: <App />,
      }
    ],
  },
]);

root.render(<RouterProvider router={router} />);
