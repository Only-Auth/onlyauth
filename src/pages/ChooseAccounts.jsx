import AccountChangeListItem from '@/components/AccountChangeListItem'
import CardLayout from '@/layout/CardLayout'
import { AccountListItem } from '@/components/AccountListItem'
import { Separator } from '@/components/ui/separator'
import { getLocalStorage } from '@/utils/storage'
import { useQuery } from '@tanstack/react-query'
import { getConsentScreenConfig } from '@/services/appServices'
import CardLayoutLoader from '@/components/CardLayoutLoader'

function ChooseAccounts() {
  const user = JSON.parse(getLocalStorage('user'))

  const { data, isFetching } = useQuery({
    queryKey: ['consentScreenData'],
    queryFn: getConsentScreenConfig,
  })

  return isFetching ? (
    <CardLayoutLoader />
  ) : (
    <CardLayout
      header={'Choose an Account'}
      subHeader={'to continue to'}
      domain={data.appAddress}
    >
      <div className="pt-10">
        <AccountListItem
          email={user.email}
          name={user.fullName}
          picture={user.picture}
        />
        <Separator />
        <AccountChangeListItem />
        <Separator />
      </div>
    </CardLayout>
  )
}

export default ChooseAccounts
