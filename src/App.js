import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";
import "./styles/reset.scss";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Products/>
      </main>
      <Footer />
    </>
  );
}

export default App;
