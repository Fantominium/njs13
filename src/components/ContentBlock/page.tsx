import React, { ReactNode } from 'react'

type Props = {
    children?: ReactNode
    title?: string
  }

const ContentBlock = ({ children }: Props) => {
  return (
    <div className='md:container md:mx-auto h-screen px-1.5'>{children}</div>
  )
}

export default ContentBlock