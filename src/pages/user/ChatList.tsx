import { SearchIcon } from 'lucide-react'
import H1 from '../../components/Heading'
import userImg from './../../assets/user.webp'
export default function ChatList() {
  return (
    <section className='chat-list mx-auto w-full self-start sm:w-[unset] sm:min-w-[25rem]'>
      <div className='mx-4'>
        <H1>Chats</H1>
      </div>
      <div className='input-container relative mx-4 my-6'>
        <input
          type='text'
          className='input-custom !ps-9'
          placeholder='Search...'
        />
        <span className='absolute left-3 top-1/2 -translate-y-1/2'>
          <SearchIcon size={18} strokeWidth={2.4} className='' />
        </span>
      </div>
      <div className='chat-list-items flex flex-col gap-4 overflow-y-auto lg:max-h-[62vh]'>
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <ChatListItem key={i} />
          ))}
      </div>
    </section>
  )
}
type T = {
  selected?: boolean
}
function ChatListItem({ selected = false }: T) {
  return (
    <article
      className={`chat-list-item bg-light-gray-50 dark:bg-dark-blue-charcoal mx-4 cursor-pointer rounded-lg px-4 py-6 transition-all hover:bg-light-gray-100  dark:hover:bg-dark-blue-900 ${selected ? '!bg-light-gray-100 dark:bg-dark-blue-900' : ''}`}
    >
      <div className='card-content flex items-center gap-3'>
        <div>
          <img
            src={userImg}
            alt='user-image'
            className='w-10 min-w-10 flex-shrink-0'
          />
        </div>

        <div className='overflow-hidden'>
          <h3 className='mb-[2px] text-lg font-semibold'>Name</h3>
          <p className='h-[1.2rem] max-w-full overflow-hidden text-sm font-light text-light-text-black-600 dark:text-dark-text-white-600'>
            recent message
          </p>
        </div>

        <div className='ms-auto flex-shrink-0 flex-nowrap self-start text-xs font-light text-light-text-black-600 dark:text-dark-text-white-600'>
          4:50 AM
        </div>
      </div>
    </article>
  )
}
