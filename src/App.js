import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.scss";
import "./styles/reset.scss";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="html-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
