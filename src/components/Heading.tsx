export default function H1({ children }: TChildren) {
  return (
    <h1 className='text-2xl font-semibold md:text-2xl lg:text-3xl'>
      {children}
    </h1>
  )
}
