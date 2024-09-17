import { CiUser } from 'react-icons/ci'

export const AccountListItem = ({ name, email, picture }) => {
  return (
    <div className="flex px-4 py-3 gap-4 w-full max-w-sm hover:bg-gray-100 hover:rounded-lg cursor-pointer">
      <div className="p-3 rounded-full bg-gray-200">
        <CiUser size={24} />
      </div>
      <div className="flex flex-col">
        <p className="text-black font-semibold">Paritosh Jha</p>
        <p className="w-[250px] text-gray-600 text-sm text-ellipsis overflow-hidden">
          jhapariosh.542001@gmail.com
        </p>
      </div>
    </div>
  )
}

