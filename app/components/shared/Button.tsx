import { Inter } from "next/font/google"

const inter = Inter({
    weight: '500',
    subsets: ['latin'],
})
function Button({ children, type, fontSize, padding, leading, className, disabled = false }: childrenProps<ButtonProps>) {
  return (
    <button 
      disabled={disabled} 
      className={`w-fit bg-[#141718] text-white rounded-[8px] text-[${fontSize}] ${padding} leading-[${leading}] ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className} ${inter.className}`} 
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
