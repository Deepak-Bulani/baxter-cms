import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import AddUser from './src/components/user/AddUser';
import ClinicalHome from './src/components/clinical/ClinicalHome';
import Patient from './src/components/patient';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'clinical',
        element: <ClinicalHome />,
      },
      {
        path: 'adequest',
        element: <AddUser />,
      },
      {
        path: 'app',
        element: <Patient />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
