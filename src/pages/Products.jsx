import { productsData } from "../data/productsData";
import Product from "../components/Product";
import Search from "../components/Search";
import "../styles/Products.scss";

function Products() {
  

  return (
    <section className="product-section">
      <div className="container">
        <Search />
        <div className="products-grid">
          {productsData.map((el, i) => {
            return <Product key={i} prodData={el} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
