import type React from "react"
// interfaces/index.ts
export interface CardProps {
  title: string
  content: string
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostCardProps {
  title: string
  content: string
  userId: number
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface UserCardProps {
  user: User
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large"
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"
}

export interface PostModalProps {
  onClose: () => void
  onSave: (title: string, content: string) => void
}
