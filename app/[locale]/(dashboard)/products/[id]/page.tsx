"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

function ProductPage({ params }: { params: Params}) {
  const { id } = params;
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products/" + id);
      const data = await res.json();
      setProduct(data);
    };

    fetchData();
  }, []);

  const discountedPrice = product && (product.price - (product.price * product.discountPercentage / 100));

  if (product) {
      return (
        <section className="flex-1 flex flex-col">
          <div className="container flex-1 mx-auto flex-col flex justify-center items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image className="w-full" width={500} height={500} src={product?.thumbnail} alt={product?.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product?.title}</div>
                <p className="text-gray-700 text-base">{product?.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Category: {product?.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  Brand: {product?.brand}
                </span>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                  Price: ${product?.price.toFixed(2)}
                </p>
                <p className="text-gray-700 text-base">
                  Discounted Price: ${discountedPrice?.toFixed(2)}
                </p>
                <p className="text-gray-700 text-base">Rating: {product?.rating}</p>
                <p className="text-gray-700 text-base">Stock: {product?.stock}</p>
              </div>
            </div>
          </div>
        </section>
      );
  } else return <div className="mx-auto mt-[200px]">Loading...</div>

}

export default ProductPage;
