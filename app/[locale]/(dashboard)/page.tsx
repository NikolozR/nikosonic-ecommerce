"use client";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import Search from "../../components/Search";
import { ChangeEvent } from "react";
import { debounce } from "../../../scripts/debounce";


function Products() {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState<[Product[], Product[]]>([[], []]);

  useEffect(() => {
    const fetchData = async () => {
    };
    fetchData();
  }, []);

  const handleSort = () => {
    setProducts((prevState) => {
      const clone = [...prevState[0]];
      clone.sort((a, b) => a.price - b.price);
      return [clone, prevState[1]];
    });
  };

  const handleInput: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    const val = e.target.value;
    setInput(val);
    debounce(() => {
      setProducts(
        val !== ""
          ? [
              products[0].filter((product) => product.title.toLowerCase().indexOf(val.toLowerCase()) !== -1),
              products[1],
            ]
          : [products[1], products[1]]
      );
    }, 500)();
  };

  if (products) {
    return (
      <section className="flex-1">
        <div className="py-[30px] px-[20px] flex flex-col items-center gap-[40px]">
          <Search handleSort={handleSort} val={input} handleInput={handleInput} />
          <div className="p-[2rem] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[100px]">
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
