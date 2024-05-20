import toast, { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import SignUp from './pages/auth/SignUp'
import NotFound from './components/NotFound'
import SignIn from './pages/auth/SignIn'
import Tasks from './components/user/Tasks'
// import { useEffect, useRef, useState } from 'react'
// import { pingFn } from './api/apiCalls'
import Logout from './pages/auth/Logout'
import CheckAuth from './pages/auth/CheckAuth'
import Home from './pages/Home'

export default function App() {
  // const [ready, setReady] = useState(false)
  // const toastRef = useRef<null | string>(null)
  // const toastRef2 = useRef<null | string>(null)

  // useEffect(() => {
  //   // ping the API the first thing, to overcome cold start
  //   pingFn()
  //     .then(() => setReady(true))
  //     .catch((err) => err)
  // }, [])

  // // Cold start notification
  // useEffect(() => {
  //   const local = sessionStorage.getItem('firstLoad')
  //   //only show this on the very first render
  //   if (!local) {
  //     toastRef.current = toast.loading(
  //       <span className='text-sm'>
  //         Fetching data...
  //         <br />
  //         Can take upto a minute or two due to cold starts of the dev
  //         environment
  //       </span>,
  //       { duration: 4000 },
  //     )
  //     toastRef2.current = toast.loading(
  //       <span className='text-sm'>Please wait...</span>,
  //     )
  //   }
  //   if (toastRef.current && ready && toastRef2.current) {
  //     toast.dismiss(toastRef.current)
  //     toastRef.current = null

  //     toast.dismiss(toastRef2.current)
  //     toastRef2.current = null
  //   }
  //   sessionStorage.setItem('firstLoad', 'true')

  //   return () => {}
  // }, [ready])

  return (
    <div className='app'>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route index element={<Home />} />
        <Route path='/auth'>
          <Route index element={<NotFound />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='logout' element={<Logout />} />
        </Route>
        <Route path='*' element={<NotFound />} />

        {/* --- 🔒--- */}
        <Route path='/user' element={<CheckAuth />}>
          <Route index path='tasks' element={<Tasks />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
