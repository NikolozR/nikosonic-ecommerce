import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";
import "./styles/reset.scss";

function App() {
  return (
    <div className="html-wrapper">
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
