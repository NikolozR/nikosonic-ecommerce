import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-customMain flex-[0_0_auto]  mt-[20px]">
      <div className="container mx-auto">
        <div className="footer-body">
            <ul className="flex nav-ul justify-between p-[10px]" aria-label="Quick Links">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/explore"}>Explore Us</Link></li>
                <li><Link href={"/brands"}>Brands</Link></li>
                <li><Link href={"/contacts"}>Contact us</Link></li>
            </ul>
        </div>
        <div className="footer-footer">
            
        </div>
      </div>
    </footer>
  );
}

export default Footer;
