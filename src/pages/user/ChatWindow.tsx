import userImg from './../../assets/user.webp'
import sendDark from './../../assets/send-dark.svg'
import sendLight from './../../assets/send-light.svg'
export default function ChatWindow() {
  return (
    <div className='chat-window-container flex-grow'>
      <section className='chat-window relative flex max-h-full flex-col overflow-y-auto rounded-xl border-2 border-light-gray-100 p-4 pt-24 dark:border-dark-blue-100'>
        <div className='chat-header dark:bg-dark-blue-charcoal bg-light-gray-50 absolute inset-0 bottom-[unset] z-10 px-4 py-3.5'>
          <p className='flex items-center gap-3'>
            <img src={userImg} alt='user-image' className='w-8 min-w-8' />
            <span className='username text-lg font-semibold tracking-wide'>
              Maya
            </span>
          </p>
        </div>

        <div className='chat-content flex flex-col gap-9 py-4'>
          <SenderChatBubble />
          <RecieverChatBubble />
          <SenderChatBubble />
          <RecieverChatBubble />
          <SenderChatBubble />
          <RecieverChatBubble />
          <SenderChatBubble />
          <RecieverChatBubble />
          <RecieverChatBubble />
          <RecieverChatBubble />
        </div>

        <div className='chat-footer mt-auto'>
          <div className='input-container relative'>
            <input
              type='text'
              className='input-custom !pr-14'
              name='text'
              placeholder='Start typing...'
            />
            <button className='absolute right-3 top-1/2 w-7 -translate-y-1/2 rounded-full border-2 border-[transparent] outline-none transition-all focus-within:border-accent-lavender hover:border-accent-lavender dark:focus-within:border-accent-lavender-darker dark:hover:border-accent-lavender-darker'>
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
    </div>
  )
}

/* CHANGE TO REQUIRED 🔴 */
type T = {
  pfp?: string
  name?: string
  time?: string
  message?: string
  groupChat?: boolean
}
function SenderChatBubble({
  pfp = '',
  name = 'Maya',
  time = '4:50 AM',
  message = 'Sample text',
  groupChat = false,
}: T) {
  return (
    <article className='chat-bubble sender-chat-bubble relative flex items-center gap-3'>
      {pfp === '' ? (
        <img
          src={userImg}
          alt='userImage'
          className='aspect-square h-7 w-7 min-w-7'
        />
      ) : (
        <img
          src={pfp}
          alt='userImage'
          className='aspect-square h-7 w-7 min-w-7'
        />
      )}
      {/* [min(20rem, 80%)] */}
      <div
        className='bubble dark:bg-dark-blue-charcoal bg-light-gray-50 relative min-w-48 rounded-lg px-3 py-2.5 text-sm font-light'
        style={{ maxWidth: 'min(70%, 30rem)' }}
      >
        {message}
        <p className='absolute inset-3 -top-5 bottom-[unset] flex justify-between text-xs font-light text-light-text-black-600 dark:text-dark-text-white-600'>
          {groupChat && <span>{name}</span>}
          <span className='ms-auto text-[.65rem]'>{time}</span>
        </p>
      </div>
    </article>
  )
}
type T2 = {
  time?: string
  message?: string
  groupChat?: boolean
}
function RecieverChatBubble({
  time = '4:50 AM',
  message = 'Sample text',
  groupChat = false,
}: T2) {
  return (
    <article className='chat-bubble reciever-chat-bubble relative ml-auto flex items-center gap-3'>
      <div
        className='bubble relative min-w-48 rounded-lg bg-accent-lavender px-3 py-2.5  text-sm font-light text-dark-text-white-900'
        style={{ maxWidth: 'min(70%, 30rem)' }}
      >
        {message}
        <p className='absolute inset-3 -top-5 bottom-[unset] flex justify-between text-xs font-light text-light-text-black-600 dark:text-dark-text-white-600'>
          {groupChat && <span className=''>You</span>}
          <span className='ms-auto text-[.65rem]'>{time}</span>
        </p>
      </div>
    </article>
  )
}
