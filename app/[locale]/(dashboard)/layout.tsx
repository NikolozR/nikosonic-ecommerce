import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import NewsLetter from "../../components/shared/NewsLetter";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <NewsLetter />
      <Footer />
    </>
  );
}
