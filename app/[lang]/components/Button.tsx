'use client'
function Button({children, handle = () => {}}: childrenProps<handleVoid>) {
  return (
    <button onClick={() => {handle()}} className='btn border-0 rounded-[8px] bg-customSecondary text-[16px] text-white p-[15px] block cursor-pointer'>
        {children}
    </button>
  )
}

export default Button