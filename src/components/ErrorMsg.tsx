import React from 'react'
type TChildren = {
  children: React.ReactNode
}
export default function ErrorMsg({ children }: TChildren) {
  return (
    <p className='error-elements text-red-500 text-red ms-1 mt-1 text-xs font-light'>
      {children}
    </p>
  )
}
