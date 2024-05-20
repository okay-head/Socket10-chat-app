import { useState } from 'react'
type T = TChildren & {
  classVars?: string
  type?: 'accent' | 'normal'
  span?: boolean
  disabled?: boolean
}
export default function Button({
  children,
  classVars = '',
  type = 'normal',
  span = false,
  disabled = false,
}: T) {
  const [pressed, setPressed] = useState(false)

  let appendClass = ''
  if (type === 'accent')
    appendClass = `bg-accent-lavender hover:bg-accent-lavender-darker dark:bg-accent-lavender dark:hover:bg-accent-lavender-darker text-dark-text-white-900 ${disabled ? 'opacity-40 hover:bg-accent-lavender  dark:hover:bg-accent-lavender  cursor-not-allowed' : ''}`
  else if (type === 'normal')
    appendClass = `bg-light-gray-100 hover:bg-light-gray-200 dark:bg-dark-blue-100 dark:hover:bg-dark-blue-900 ${disabled ? 'opacity-40 hover:bg-light-gray-100 dark:hover:bg-dark-blue-100 cursor-not-allowed' : ''}`
  return span ? (
    <span
      onMouseDown={() => {
        setPressed(true)
      }}
      onMouseUp={() => {
        setPressed(false)
      }}
      className={`${appendClass} rounded-lg px-3.5 py-2.5 text-sm transition-all ${pressed ? 'mouse-shrink' : ''} ${classVars}`}
    >
      {children}
    </span>
  ) : (
    <button
      onMouseDown={() => {
        setPressed(true)
      }}
      onMouseUp={() => {
        setPressed(false)
      }}
      className={`${appendClass} rounded-lg px-3.5 py-2.5 transition-all ${pressed ? 'mouse-shrink' : ''} ${classVars}`}
    >
      {children}
    </button>
  )
}
