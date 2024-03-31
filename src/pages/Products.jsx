import { productsData } from "../data/productsData";
import Product from "../components/Product";
import Search from "../components/Search";
import "../styles/Products.scss";
import { useState } from "react";

function debounce(f, delay) {
  let id;

  return function () {
    clearTimeout(id);
    id = setTimeout(f, delay);
  }
}

function Products() {
  const [products, setProducts] = useState(productsData)
  const [input, setInput] = useState('')
  
  const handleSort = () => {
    setProducts((prevState) => {
      const clone = [...prevState]
      clone.sort((a, b) => a.price - b.price)
      return clone
    })
  }


  const handleInput = (e) => {
    const val = e.target.value
    setInput(val)
    debounce(() => {
      setProducts(val !== '' ? productsData.filter(product => product.title.toLowerCase().indexOf(val.toLowerCase()) !== -1) : productsData)
    }, 500)()
  } 

  return (
    <section className="product-section">
      <div className="container">
        <Search handleSort={handleSort} val={input} handleInput={handleInput} />
        <div className="products-grid">
          {products.map((el, i) => {
            return <Product key={i} prodData={el} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
