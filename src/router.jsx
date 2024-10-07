import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layout/RootLayout'
import ChooseAccounts from './pages/ChooseAccounts'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Consent from './pages/Consent'
import ProtectedRoutes from './utils/ProtectedRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoutes>
        <RootLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: <ChooseAccounts />,
      },
      {
        path: '/consent',
        element: <Consent />,
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
