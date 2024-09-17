import { CiUser } from 'react-icons/ci'

function AccountChangeListItem() {
  return (
    <div className="flex px-4 py-3 gap-4 w-full max-w-sm hover:bg-gray-100 hover:rounded-lg cursor-pointer">
      <div className="p-3 rounded-full bg-gray-200">
        <CiUser size={24} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-black font-medium">Use another account</p>
      </div>
    </div>
  )
}

export default AccountChangeListItem
