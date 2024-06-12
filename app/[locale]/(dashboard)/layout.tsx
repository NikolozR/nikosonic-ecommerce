import Footer from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
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
