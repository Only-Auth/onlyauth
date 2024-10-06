import { Link } from 'react-router-dom'

import CustomAvatar from './CustomAvatar'

export const AccountListItem = ({ name, email, picture }) => {
  return (
    <Link to={'/consent'} className="flex px-4 py-3 gap-4 w-full max-w-sm hover:bg-gray-100 hover:rounded-lg cursor-pointer">
      {picture ? (
        <img src={picture} alt="user" className="w-12 h-12 rounded-full" />
      ) : (
        <CustomAvatar alphabet={name[0]} />
      )}

      <div className="flex flex-col">
        <p className="text-black font-semibold">{name}</p>
        <p className="w-[250px] text-gray-600 text-sm text-ellipsis overflow-hidden">
          {email}
        </p>
      </div>
    </Link>
  )
}
