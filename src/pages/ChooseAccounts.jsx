import { useEffect } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'

import AccountChangeListItem from '@/components/AccountChangeListItem'
import CardLayout from '@/layout/CardLayout'
import { AccountListItem } from '@/components/AccountListItem'
import { Separator } from '@/components/ui/separator'
import { getLocalStorage, setSessionStorage } from '@/utils/storage'

function ChooseAccounts() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    // http://localhost:5173/?client_id=1234&redirect_uri=https%3A%2F%2Fhitenvats.com&scopes=profile

    const authQueryParams = {
      client_id: searchParams.get('client_id') || '',
      redirect_uri: searchParams.get('redirect_uri') || '',
      scopes: searchParams.getAll('scopes') || [],
    }

    if (
      authQueryParams.client_id === '' ||
      authQueryParams.redirect_uri === '' ||
      authQueryParams.scopes.length === 0
    ) {
      //navigate to error page
      console.log('INVALID URL')
      return
    }
    setSessionStorage('authQueryParams', JSON.stringify(authQueryParams))

    //retrive the stored access token
    const token = getLocalStorage('token')

    if (!token) {
      console.log('No token is found')
      navigate('/login')
    }
  }, [])

  return (
    <CardLayout
      header={'Choose an Account'}
      subHeader={'to continue to'}
      domain={'example.com'}
    >
      <div className="pt-10">
        <AccountListItem />
        <Separator />
        <AccountChangeListItem />
        <Separator />
      </div>
    </CardLayout>
  )
}

export default ChooseAccounts
