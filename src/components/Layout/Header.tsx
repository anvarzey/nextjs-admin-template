import { ThemeToggle } from '../ThemeToggle'

export default function Header () {
  return (
    <header className='flex items-center justify-end p-4'>
      <div>
        <ThemeToggle />
      </div>
    </header>
  )
}
