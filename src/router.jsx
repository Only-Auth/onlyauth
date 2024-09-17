import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layout/RootLayout'
import ChooseAccounts from './pages/ChooseAccounts'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <ChooseAccounts />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
])

export default router
