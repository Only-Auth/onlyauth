import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/components/RootLayout'
import ChooseAccounts from './pages/ChooseAccounts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <ChooseAccounts/>
      },
      {
        path: '/login',
      },
      {
        path: '/register',
      },
    ],
  },
])

export default router
