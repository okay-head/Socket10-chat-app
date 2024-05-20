import { Link } from 'react-router-dom'
import { List, Plus, Moon, Sun } from 'react-feather'
import useGlobalStore from '../../state/GlobalState'
import { useEffect, useState } from 'react'
import Button from '../Button'
import toggleTheme from '../../utils/toggleTheme'

export default function Navbar() {
  const { user } = useGlobalStore()
  const [visible, setvisible] = useState(false)
  useEffect(() => {
    toggleTheme()
  }, [])
  return (
    <div className='navbar fixed inset-0 bottom-[unset] z-40 w-full bg-dark-text-white-900 px-4 py-3.5 shadow-md dark:bg-dark-blue-600 lg:px-8'>
      <div className='nav-content flex items-center'>
        <Link to='/' className='btn btn-ghost btn-sm text-xl font-semibold'>
          flowchat
        </Link>
        <div className='ms-auto flex items-center gap-1'>
          <Link
            to={'auth/signin'}
            className='rounded-lg px-2 py-1 hover:bg-light-gray-100 dark:hover:bg-dark-blue-100'
          >
            Login
          </Link>
          <div className='theme relative rounded-lg px-1.5 py-1 hover:bg-light-gray-100 dark:hover:bg-dark-blue-100'>
            <Moon id='theme-toggle-dark-icon' size={20} className='hidden' />
            <Sun id='theme-toggle-light-icon' size={20} className='hidden' />
            <button id='theme-toggle' className='absolute inset-0 p-3'></button>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  )
}

// function later() {
//   <div className='flex-none gap-2'>
//   {/* when signed in  */}
//   {user && (
//     <Link
//       to={!user ? '/auth/signin' : '/user/create'}
//       state={{ to: '/user/create' }}
//       className='btn btn-ghost btn-xs sm:btn-sm sm:mx-2'
//     >
//       <Plus size={20} />
//       <span className='hidden md:inline-block'>Add task</span>
//     </Link>
//   )}
//   {user && (
//     <Link
//       to={!user ? '/auth/signin' : '/user/tasks'}
//       state={{ to: '/user/tasks' }}
//       className='btn btn-ghost btn-xs sm:btn-sm sm:mx-2'
//     >
//       <List size={20} />
//       <span className='hidden md:inline-block'>All tasks</span>
//     </Link>
//   )}

//     <Moon size={24} className={!visible ? 'hidden' : ''} />
//     <Sun size={24} className={visible ? 'hidden' : ''} />
// </div>

// }
