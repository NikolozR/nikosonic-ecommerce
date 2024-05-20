'use client'
function Button({children, handle = () => {}}: childrenProps<handleVoid>) {
  return (
    <button onClick={() => {handle()}} className='btn border-0 rounded-[8px] bg-neutral-3 dark:text-white dark:bg-neutral-5 text-[0.65rem] md:text-[1rem] text-black p-[15px] block cursor-pointer'>
        {children}
    </button>
  )
}

export default Button