import { useNavigate } from 'react-router-dom'

import CardLayout from '@/layout/CardLayout'
import { useQuery } from '@tanstack/react-query'
import { getConsentScreenConfig } from '@/services/appServices'
import { getLocalStorage } from '@/utils/storage'
import CardLayoutLoader from '@/components/CardLayoutLoader'
import { Button } from '@/components/ui/button'
import { getSessionStorage } from '@/utils/storage'
import { handleGrantTokenRequest } from '@/services/authServices'

function Consent() {
  const navigate = useNavigate()

  const { data, isFetching } = useQuery({
    queryKey: ['consentScreenData'],
    queryFn: getConsentScreenConfig,
  })

  const user = JSON.parse(getLocalStorage('user'))

  function navigateToChooseAccountsPage() {
    console.log('here')
    const authQueryParams = JSON.parse(getSessionStorage('authQueryParams'))

    navigate(
      '/?client_id=' +
        authQueryParams.client_id +
        '&redirect_uri=' +
        authQueryParams.redirect_uri +
        '&scopes=' +
        authQueryParams.scopes.join(','),
      {
        replace: true,
      }
    )
  }

  function handleRedirect() {
    handleGrantTokenRequest()
  }

  return isFetching ? (
    <CardLayoutLoader />
  ) : (
    <CardLayout
      header={'Sign in'}
      subHeader={'to continue to'}
      domain={data.appAddress}
    >
      <div className="flex items-center gap-1 border-2 border-gray-400 px-2 rounded-full cursor-pointer  max-w-xs">
        <p className="text-sm text-ellipsis overflow-hidden">{user.email}</p>
      </div>
      <div className="pt-10 w-full">
        <div className="flex gap-3">
          <Button
            variant="secondary"
            onClick={navigateToChooseAccountsPage}
            className="flex-1 rounded-full h-12"
          >
            Cancel
          </Button>
          <Button onClick={handleRedirect} className="flex-1 rounded-full h-12">
            Continue
          </Button>
        </div>
      </div>
    </CardLayout>
  )
}

export default Consent
