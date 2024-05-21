import userImg from './../../assets/user.webp'
import sendDark from './../../assets/send-dark.svg'
import sendLight from './../../assets/send-light.svg'
export default function ChatWindow() {
  return (
    <section className='chat-window relative flex max-h-full flex-grow flex-col overflow-y-auto rounded-xl border-2 border-light-gray-100 p-4 pt-20 dark:border-dark-blue-100'>
      <div className='chat-header dark:bg-dark-blue-charcoal bg-light-gray-50 absolute inset-0 bottom-[unset] z-10 px-4 py-3.5'>
        <p className='flex items-center gap-3'>
          <img src={userImg} alt='user-image' className='w-8 min-w-8' />
          <span className='username text-lg font-semibold tracking-wide'>
            Maya
          </span>
        </p>
      </div>

      <div className='chat-content'></div>
      <div className='chat-footer mt-auto'>
        <div className='input-container relative'>
          <input
            type='text'
            className='input-custom dark:bg-dark-blue-charcoal bg-light-gray-50 !pr-14'
            name='text'
            placeholder='Start typing...'
          />
          <button className='absolute right-3 top-1/2 w-7 -translate-y-1/2 rounded-full border-2 border-[transparent] outline-none transition-all focus-within:border-accent-lavender-darker hover:border-accent-lavender-darker dark:focus-within:border-accent-lavender-darker dark:hover:border-accent-lavender-darker'>
            <img
              src={sendDark}
              alt='send'
              className='hidden w-7 dark:inline-block'
            />
            <img
              src={sendLight}
              alt='send'
              className='inline-block w-7 dark:hidden'
            />
          </button>
        </div>
      </div>
    </section>
  )
}
