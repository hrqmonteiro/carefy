'use client'

interface LogoProps {
  width: number
}

export default function Logo({ width }: LogoProps) {
  return <img src='/logo.png' alt='Carefy' width={width} />
}
