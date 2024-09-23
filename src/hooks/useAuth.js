import { useState } from 'react'
import { signIn, signUp } from '@/services/authServices'
import { useNavigate } from 'react-router-dom'
import { setLocalStorage, getSessionStorage } from '@/utils/storage'

export function useAuth() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function redirectToChooseAccountsPage() {
    const authQueryParams = JSON.parse(getSessionStorage('authQueryParams'))
    navigate(
      '/?client_id=' +
        authQueryParams.client_id +
        '&redirect_uri=' +
        authQueryParams.redirect_uri +
        '&scopes=' +
        authQueryParams.scopes.join(',')
    )
  }

  async function handleSignIn(credentials) {
    setLoading(true)
    try {
      const response = await signIn(credentials)

      setLocalStorage('token', response.accessToken)
      setLocalStorage('user', JSON.stringify(response.user))

      setError(null)

      redirectToChooseAccountsPage()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleSignUp(data) {
    setLoading(true)
    try {
      const response = await signUp(data)

      setLocalStorage('token', response.accessToken)
      setLocalStorage('user', JSON.stringify(response.user))

      setError(null)

      redirectToChooseAccountsPage()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    handleSignIn,
    handleSignUp,
  }
}
