import { createBrowserRouter } from 'react-router-dom'

import RootLayout from './layout/RootLayout'
import ChooseAccounts from './pages/ChooseAccounts'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Consent from './pages/Consent'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
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
      {
        path: '/consent',
        element: <Consent />,
      },
    ],
  },
])

export default router
