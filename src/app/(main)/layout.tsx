import { ReactNode } from 'react'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'

interface Props {
  children: ReactNode
}

export default function MainLayout ({ children }: Props) {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='grow'>
        <Header />
        {children}
      </div>
    </div>
  )
}
