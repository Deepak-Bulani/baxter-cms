// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Security, LoginCallback} from '@okta/okta-react';
import {OktaAuth, toRelativeUrl} from '@okta/okta-auth-js';
import {oktaConfig} from './authConfig';
import Layout from './src/components/Layout/Layout';
import AddUser from './src/components/user/AddUser';
import AccountSetting from './src/components/accounts/AccountSetting';
import ClinicalHome from './src/components/clinical/ClinicalHome';
import App from './src/App';
import RequireAuth from './src/components/RequireAuth';
import Login from './src/components/Login'; // Add this import
import SecureRoute from './src/components/auth/SecureRoute';

console.log(oktaConfig, 'oktaConfig');

const oktaAuth = new OktaAuth(oktaConfig);

// Create a custom callback handler
const CustomSecurityWrapper = ({children}) => {
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    const baseUrl = window.location.origin;
    const path = originalUri || '/';
    window.location.replace(`${baseUrl}${path}`);
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={() => {
        window.location.href = '/login';
      }}
    >
      {children}
    </Security>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CustomSecurityWrapper>
        <Layout />
      </CustomSecurityWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <SecureRoute>
            <App />
          </SecureRoute>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'callback',
        element: <LoginCallback />,
      },
      {
        path: 'user',
        element: (
          <SecureRoute>
            <AccountSetting />
          </SecureRoute>
        ),
      },
      {
        path: 'clinical',
        element: (
          <SecureRoute>
            <ClinicalHome />
          </SecureRoute>
        ),
      },
      {
        path: 'adequest',
        element: (
          <SecureRoute>
            <AddUser />
          </SecureRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
