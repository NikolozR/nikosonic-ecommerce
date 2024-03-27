import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import "./styles/reset.scss";
import "./App.scss";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <div className="html-wrapper">
      {/* Uncomment below code for solution 2 for Routing*/}
      {/* <Layout></Layout> */}

      {/* Comment below element to use solution 2  for Routing*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
