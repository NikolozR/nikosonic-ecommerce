import Error from "./components/Error";
import Products from "./components/Products";
import "./App.scss";
import "./styles/reset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="html-wrapper">
      {/* Uncomment below code for solution 2 */}
      {/* <Layout></Layout> */}

      {/* Comment below element to use solution 2 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
