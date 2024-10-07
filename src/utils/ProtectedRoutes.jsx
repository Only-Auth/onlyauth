import Cookies from 'js-cookie'
import { Navigate, useLocation } from 'react-router-dom'
import { useConsent } from '@/hooks/useConsent'

function ProtectedRoutes({ children }) {
  const token = Cookies.get('token')
  const location = useLocation()
  const { isValidUrl, saveAuthQueryParams } = useConsent()

  if (location.pathname === '/' && !isValidUrl()) {
    return <Navigate to="/error" state={{ from: location }} replace />
  }

  if (isValidUrl()) {
    saveAuthQueryParams()
  }

  if (
    location.pathname !== '/login' &&
    location.pathname !== '/signup' &&
    !token
  ) {
    console.log('token not found')
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoutes
