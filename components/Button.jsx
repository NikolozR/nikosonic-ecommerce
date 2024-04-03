function Button({children, onClick}) {
  return (
    <button onClick={onClick} className='btn border-0 rounded-[8px] bg-customSecondary text-[16px] text-white p-[15px] block cursor-pointer'>
        {children}
    </button>
  )
}

export default Button