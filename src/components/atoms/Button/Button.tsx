'use client'

interface ButtonProps {
  children?: React.ReactNode
  className?: string
  color?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  size?: string
  text?: string | React.ReactNode
  variant?: string
}

export default function Button({
  children,
  className,
  color,
  onClick,
  text,
  variant
}: ButtonProps) {
  return (
    <button
      className={`${className} py-3 rounded-lg ${variant} ${color} py-3 px-10 hover:opacity-80 transition-all duration-200`}
      onClick={onClick}
    >
      <span>{text}</span>
      {children}
    </button>
  )
}
