import AccountChangeListItem from '@/components/AccountChangeListItem'
import { AccountListItem } from '@/components/AccountListItem'
import CardLayout from '@/components/CardLayout'
import { Separator } from '@/components/ui/separator'

function ChooseAccounts() {
  return (
    <CardLayout>
      <div className="flex flex-col items-center justify-center my-2">
        <p className="text-2xl font-medium">Choose an Account</p>
        <p className="text-sm">
          to continue to{' '}
          <span className="font-semibold text-blue-600">example.com</span>
        </p>
      </div>
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
