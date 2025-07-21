import type React from "react"
import type { UserCardProps } from "../../interfaces"

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
      <p className="text-gray-600 text-sm mb-1">Email: {user.email}</p>
      <p className="text-gray-600 text-sm mb-1">Phone: {user.phone}</p>
      <p className="text-gray-600 text-sm mb-1">Website: {user.website}</p>
      <p className="text-gray-600 text-sm mt-2">
        Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  )
}

export default UserCard
