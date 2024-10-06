import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({ children }) {
  const token = Cookies.get('token')

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoutes
