import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Cookies from 'js-cookie'

import AccountChangeListItem from '@/components/AccountChangeListItem'
import CardLayout from '@/layout/CardLayout'
import { AccountListItem } from '@/components/AccountListItem'
import { Separator } from '@/components/ui/separator'
import { getLocalStorage, setSessionStorage } from '@/utils/storage'

function ChooseAccounts() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const user = JSON.parse(getLocalStorage('user'))

  useEffect(() => {
    // http://localhost:5173/?client_id=cid_e8e3797a18ab5c89a593ae46&redirect_uri=https%3A%2F%2Fhitenvats.com&scopes=profile

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
    const token = Cookies.get('token')

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
        {user ? (
          <AccountListItem
            email={user.email}
            name={user.fullName}
            picture={user.picture}
          />
        ) : (
          <div className="flex px-4 py-3 gap-4 w-full max-w-sm justify-center items-center">
            <p className="font-medium">No account found!</p>
          </div>
        )}
        <Separator />
        <AccountChangeListItem />
        <Separator />
      </div>
    </CardLayout>
  )
}

export default ChooseAccounts
