import Footer from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
import NewsLetter from "../../components/shared/NewsLetter";
import { CartProvider } from "../../components/providers/CartProvider";
import { getAuth0User } from "../../actions";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAuth0User();
  const theme = cookies().get("theme")?.value ?? "";


  return (
    <>
      <CartProvider>
        <NavBar user={user} theme={theme} />
        {children}
      </CartProvider>
      <NewsLetter />
      <Footer />
    </>
  );
}
