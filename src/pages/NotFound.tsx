import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not-found bg-white absolute inset-0 z-10 grid place-items-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-medium lg:text-4xl'>404 Not Found</h1>
        <Link
          to='/'
          className='mt-4 inline-block text-light-text-black-600 hover:underline dark:text-dark-text-white-600'
        >
          Back to home →
        </Link>
      </div>
    </div>
  )
}
