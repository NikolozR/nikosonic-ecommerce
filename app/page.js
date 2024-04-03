"use client"; 
import { useState } from "react";
import { productsData } from "../data/productsData";
import Product from "../components/Product";
import Search from "../components/Search";

function debounce(f, delay) {
  let id;

  return function () {
    clearTimeout(id);
    id = setTimeout(f, delay);
  };
}

function Products() {
  const [products, setProducts] = useState(productsData);
  const [input, setInput] = useState("");

  const handleSort = () => {
    setProducts((prevState) => {
      const clone = [...prevState];
      clone.sort((a, b) => a.price - b.price);
      return clone;
    });
  };

  const handleInput = (e) => {
    const val = e.target.value;
    setInput(val);
    debounce(() => {
      setProducts(
        val !== ""
          ? productsData.filter(
              (product) =>
                product.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
            )
          : productsData
      );
    }, 500)();
  };

  return (
    
      <section className="flex-1">
        <div className="container mx-auto">
          <Search
            handleSort={handleSort}
            val={input}
            handleInput={handleInput}
          />
          <div className="w-full grid grid-flow-col gap-[40px] overflow-x-auto">
            {products.map((el, i) => {
              return <Product key={i} prodData={el} />;
            })}
          </div>
        </div>
      </section>
    
  );
}

export default Products;
