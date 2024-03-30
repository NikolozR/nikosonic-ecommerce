import { productsData } from "../data/productsData";
import Product from "../components/Product";
import Search from "../components/Search";
import "../styles/Products.scss";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState(productsData)
  
  const handleSort = () => {
    setProducts((prevState) => {
      const clone = [...prevState]
      clone.sort((a, b) => a.price - b.price)
      return clone
    })
  }

  return (
    <section className="product-section">
      <div className="container">
        <Search handleSort={handleSort} />
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
