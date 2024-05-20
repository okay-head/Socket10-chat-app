import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ErrorMsg from '../../components/ErrorMsg'
import Container from '../../components/Container'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { signinFn } from '../../api/apiCalls'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import useGlobalStore from '../../state/GlobalState'
import Button from '../../components/Button'
import LoadingSpinner from '../../assets/LoadingSpinner'

export default function SignIn() {
  const [disabled, setDisabled] = useState(false)
  const { user, setUser } = useGlobalStore()
  const { state } = useLocation()
  const navigate = useNavigate()
  const navigateTo = !state ? '/user/tasks' : state.to

  // redirect already signed in users to /user/tasks
  useEffect(() => {
    if (user) navigate(navigateTo, { replace: true })
  }, [navigate, user, navigateTo])

  const formSchema = z
    .object({
      email: z
        .string()
        .trim()
        .toLowerCase()
        .min(1, 'Email is required')
        .email(),
      password: z
        .string()
        .trim()
        .min(1, 'Password is required')
        .min(12, 'Password must be min 12 chars long')
        .max(24, 'Password can be a maximum of 24 chars long'),
    })
    .refine((form) => form.email !== form.password, {
      message: 'Password cannot be the same as email',
      path: ['password'], // path of error
    })

  //single source of truth
  type TForm = z.infer<typeof formSchema>

  //initialising react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  // On submit ✅
  const onSubmitHandler: SubmitHandler<TForm> = async ({ email, password }) => {
    toast.loading('Signing in', {
      duration: 1300,
    })
    setDisabled(true)
    // try {
    //   const response: TUserMongo = await signinFn(email, password)

    //   // introduce artificial delay for signin
    //   setTimeout(() => {
    //     setUser({ id: response._id, username: response.username })
    //   }, 1000)
    // } catch (error) {
    //   toast.dismiss()
    //   const err = error as AxiosError

    //   // @ts-expect-error: 'message' property is uniform for err objects
    //   toast.error(`${err?.response?.data?.message}`)

    //   console.error(err.response)
    //   setDisabled(false)
    // }
  }
  const onErrorHandler: SubmitErrorHandler<TForm> = (err) => console.error(err)

  return (
    <Container classVars='pt-44'>
      <form
        id='form'
        name='form'
        onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
      >
        <div className='form-container relative mx-auto max-w-md rounded-md border-2 border-light-gray-100 px-6 py-10 dark:border-dark-blue-100 lg:px-8'>
          <h1 className='mb-8 block text-2xl font-bold'>Sign in</h1>

          <div className='flex flex-col gap-4'>
            {/* email */}
            <div className='relative'>
              <input
                {...register('email')}
                className='input-custom'
                type='email'
                name='email'
                id='email'
                placeholder='Enter Email'
              />
              <ErrorMsg>{errors?.email?.message}</ErrorMsg>
            </div>

            {/* password */}
            <div className='relative'>
              <input
                {...register('password')}
                className='input-custom'
                type='password'
                name='password'
                id='password'
                placeholder='Enter Password'
              />
              <ErrorMsg>{errors?.password?.message}</ErrorMsg>
            </div>
          </div>

          <div>
            {disabled ? (
              <button
                disabled={disabled}
                form='form'
                id='submit'
                className='mx-auto mt-4 block'
              >
                <LoadingSpinner />
              </button>
            ) : (
              <button
                disabled={disabled}
                form='form'
                id='submit'
                className='mx-auto mt-10 block'
              >
                <Button span>Sign in</Button>
              </button>
            )}
          </div>
          <p className='absolute left-1/2 top-[110%] min-w-72 -translate-x-1/2 text-center'>
            <span>Don't have an account?</span>{' '}
            <span>
              <Link to='/auth/signup' className='underline hover:no-underline'>
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </form>
    </Container>
  )
}
