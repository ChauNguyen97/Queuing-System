import ForgotPass from 'features/login/ForgotPass';
import Login from 'features/login/Login';
import ResetPass from 'features/login/ResetPass';
import React from 'react';

import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'forgot',
      element: <ForgotPass />,
    },
    {
      path: 'reset',
      element: <ResetPass />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
