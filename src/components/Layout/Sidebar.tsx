'use client'

import { ArrowRight as ArrowRightIcon, ClipboardList as ClipboardListIcon, House as HouseIcon, Users as UsersIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

export default function Sidebar () {
  const [isExpanded, setIsExpanded] = useState(true)
  const pathname = usePathname()

  const handleOpen = () => {
    setIsExpanded(prev => !prev)
  }

  const pages = [
    {
      title: 'Home',
      link: '/',
      icon: <HouseIcon />
    },
    {
      title: 'Products',
      link: '/products',
      icon: <ClipboardListIcon />
    },
    {
      title: 'Customers',
      link: '/customers',
      icon: <UsersIcon />
    }
  ]

  console.log({ pathname })

  return (
    <aside className={`${isExpanded ? 'w-[250px]' : 'w-[75px]'} transition-all ease-in-out duration-200 min-h-screen border-e border-zinc-300 p-2 dark:border-zinc-500`}>
      <div className={`flex mb-4 ${isExpanded ? 'justify-end' : 'justify-center'}`}>
        <Button onClick={handleOpen} className={`${isExpanded ? 'rotate-180' : ''}`} variant='ghost' size='icon'>
          <ArrowRightIcon />
        </Button>
      </div>
      <nav>
        <ul className='flex flex-col gap-2'>
          {
            pages.map((page, i) => (
              <li key={i}>
                <Link
                  aria-expanded={isExpanded}
                  href={page.link}
                  className={`group flex items-center gap-4 py-2 px-4 transition-all ease-in-out duration-200 rounded-md ${pathname === page.link ? 'text-primary' : 'text-muted-foreground hover:text-primary'} `}
                >
                  <span>{page.icon}</span>
                  <div className='invisible group-aria-expanded:visible'>{page.title}</div>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </aside>
  )
}
