import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import NavBar from "./src/components/navbar/NavBar";
import AdminForm from "./src/components/patient/PatientForm.jsx";
import Accordion from "./src/components/devicestemplate/Accordion.jsx";
import AddUser from "./src/components/user/AddUser.jsx"

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/navBar",
    element:<NavBar/>
  },
  {
    path:"/admin",
    element:<AdminForm/>
  },
  {
    path:"/device",
    element:<Accordion/>
  },
  {
    path:"/user",
    element:<AddUser/>
  }
]);

root.render(<RouterProvider router={router} />);
