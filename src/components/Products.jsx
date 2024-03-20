import Product from "./Product";
import Search from "./Search";
import "../styles/Products.scss";

function Products() {
  const productsData = [
    {
      title: "Cappucino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quasi veniam error laborum corrupti reprehenderit dicta aspernatur iste sit expedita.",
      img: `${process.env.PUBLIC_URL}/images/capucion.jpg`,
      price: 8.6,
    },
    {
      title: "Mocha",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quasi veniam error laborum corrupti reprehenderit dicta aspernatur iste sit expedita.",
      img: `${process.env.PUBLIC_URL}/images/mocha.png`,
      price: 9.2,
    },
    {
      title: "Latte",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quasi veniam error laborum corrupti reprehenderit dicta aspernatur iste sit expedita.",
      img: `${process.env.PUBLIC_URL}/images/latte.png`,
      price: 11.4,
    },
    {
      title: "Cold Java",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quasi veniam error laborum corrupti reprehenderit dicta aspernatur iste sit expedita.",
      img: `${process.env.PUBLIC_URL}/images/java.png`,
      price: 6.4,
    },
    {
      title: "Cold Java",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quasi veniam error laborum corrupti reprehenderit dicta aspernatur iste sit expedita.",
      img: `${process.env.PUBLIC_URL}/images/java.png`,
      price: 6.4,
    },
  ];

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
