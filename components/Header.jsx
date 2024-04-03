import Link from 'next/link'
import Button from "./Button";


function Header() {
  return (
    <header className='flex-[0_0_auto]'>
      <nav className='bg-customMain'>
        <div className="container mx-auto">
          <div className="flex py-[15px] items-center justify-between">
            <p className="font-bold text-[24px] text-white tracking-[3px] cursor-pointer">
              <Link href="/">
                <i>Filtro</i>
              </Link>
            </p>
            <ul className="flex gap-[40px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contacts">Contact us</Link>
              </li>
            </ul>
            <div className="flex gap-[15px]">
              <Button>Sign up/Login</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
