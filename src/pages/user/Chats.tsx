import Container from '../../components/Container'
import ChatList from './ChatList'
import ChatWindow from './ChatWindow'
import { useMediaQuery } from 'react-responsive'
export default function Chats() {
  const isLarge = useMediaQuery({
    query: '(min-width: 1024px)',
  })
  return (
    <Container classVars='pt-24 md:pt-28  min-h-screen max-h-[100vh] flex'>
      <div className='flex w-full gap-10'>
        <ChatList />
        {isLarge && <ChatWindow />}
      </div>
    </Container>
  )
}
