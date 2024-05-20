import { Link } from 'react-router-dom'
import Container from '../components/Container'
import useGlobalStore from '../state/GlobalState'
import Button from '../components/Button'
import HomeSvg from '../assets/HomeSvg'

export default function Home() {
  const { user } = useGlobalStore()

  return (
    <Container>
      <section>
        <div className='mx-auto flex max-w-7xl flex-col items-center gap-6 px-8 lg:gap-1'>
          <HomeSvg />
          <div className='w-full sm:text-center'>
            <div className='mx-auto w-full'>
              <h1 className='mt-8 text-5xl tracking-tight'>Flowchat</h1>
              <p className='text-light-text-black-600 dark:text-dark-text-white-600 mt-4 max-w-xl text-lg sm:mx-auto'>
                Communicate with people
              </p>
            </div>
            <div className='mt-6 flex max-w-xl flex-col justify-center gap-5 sm:mx-auto sm:flex-row sm:items-center'>
              <Link
                to={!user ? '/auth/signin' : '/user/tasks'}
                state={{ to: '/user/tasks' }}
                className='rounded-lg'
              >
                <Button type='accent' classVars='w-full'>
                  Get started
                </Button>
              </Link>
              <a
                href='https://github.com/okay-head/task-central'
                target='_blank'
                rel='noopner noreferrer'
                className='text-center hover:underline'
              >
                Code →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
