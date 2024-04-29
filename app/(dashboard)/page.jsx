"use client";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import Search from "../components/Search";

function debounce(f, delay) {
  let id;
  return function () {
    clearTimeout(id);
    id = setTimeout(f, delay);
  };
}

async function getProducts() {
  console.log("fdsgddd")
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data?.products
}

function Products() {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts([data, data]);
    };
    fetchData();
  }, [])

  const handleSort = () => {
    setProducts((prevState) => {
      const clone = [...prevState[0]];
      clone.sort((a, b) => a.price - b.price);
      return [clone, prevState[1]];
    });
  };

  const handleInput = (e) => {
    const val = e.target.value;
    setInput(val);
    debounce(() => {
      setProducts(
        val !== ""
          ? [
              products[0].filter(
                (product) =>
                  product.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
              ),
              products[1],
            ]
          : [products[1], products[1]]
      );
    }, 500)();
  };

  if (products) {
    return (
      <section className="flex-1">
        <div className="container mx-auto">
          <Search
            handleSort={handleSort}
            val={input}
            handleInput={handleInput}
          />
          <div className="w-full grid grid-flow-col gap-[40px] overflow-x-auto">
            {products &&
              products[0]?.map((el, i) => {
                return <Product key={i} prodData={el} />;
              })}
          </div>
        </div>
      </section>
    );
  } else return <div className="mx-auto mt-[200px]">Loading...</div>;
}

export default Products;
