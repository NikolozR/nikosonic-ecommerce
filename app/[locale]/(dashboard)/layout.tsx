import Footer from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
import NewsLetter from "../../components/shared/NewsLetter";
import { CartProvider } from "../../components/providers/CartProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CartProvider>
        <NavBar />
        {children}
      </CartProvider>
      <NewsLetter />
      <Footer />
    </>
  );
}
