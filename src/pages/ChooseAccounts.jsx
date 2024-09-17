import AccountChangeListItem from '@/components/AccountChangeListItem'
import { AccountListItem } from '@/components/AccountListItem'
import CardLayout from '@/layout/CardLayout'
import { Separator } from '@/components/ui/separator'

function ChooseAccounts() {
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
