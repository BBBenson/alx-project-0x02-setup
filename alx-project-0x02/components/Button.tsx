import type React from "react"
import type { ButtonProps } from "../../interfaces"

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  shape = "rounded-md",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  }

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-md transition duration-300 ease-in-out
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
