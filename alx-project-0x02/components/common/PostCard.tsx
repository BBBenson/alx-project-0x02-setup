import type React from "react"
import type { PostCardProps } from "../../interfaces"

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{content}</p>
      <div className="text-right text-gray-500 text-xs">User ID: {userId}</div>
    </div>
  )
}

export default PostCard
