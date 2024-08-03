interface Props {
  children: string
}

export default function Title ({ children }: Props) {
  return (
    <h1 className='mb-2 text-2xl font-bold'>{children}</h1>
  )
}
