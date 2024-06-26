type TChildren = {
  children: React.ReactNode
  classVars?: string
}
export default function Container({ children, classVars = '' }: TChildren) {
  return (
    <div
      className={`container-custom mx-auto max-w-[1400px] px-4 pb-10 pt-32 md:px-8 ${classVars}`}
    >
      {children}
    </div>
  )
}
