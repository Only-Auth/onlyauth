import { useSearchParams } from 'react-router-dom'
import { setSessionStorage, } from '@/utils/storage'

export function useConsent() {
  const [searchParams] = useSearchParams()

  const client_id = searchParams.get('client_id') || ''
  const redirect_uri = searchParams.get('redirect_uri') || ''
  const scopes = searchParams.getAll('scopes') || []

  function isValidUrl() {
    // pending checks for the validity of client id, redirect uri and scopes as well
    return client_id !== '' && redirect_uri !== '' && scopes.length > 0
  }

  function saveAuthQueryParams() {
    if (!isValidUrl()) {
      return
    }
    const authQueryParams = {
      client_id,
      redirect_uri,
      scopes,
    }
    setSessionStorage('authQueryParams', JSON.stringify(authQueryParams))
  }

  return {
    isValidUrl,
    saveAuthQueryParams,
  }
}
