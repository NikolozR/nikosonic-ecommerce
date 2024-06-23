'use client'
import { useOptimistic } from "react"
import Details from "./Details"
import Reviews from "./Reviews"
function OptimisticComponent({product, reviews, user}: {product: Product, reviews: Review[], user: User}) {
    const [optimisticProduct, addOptimisticProduct] = useOptimistic(product, (_, optimisticValue: Product) => {
        return optimisticValue
    })
  return (
    <div>
        <Details product={optimisticProduct} user={user} />
        <Reviews
          reviews={reviews}
          product={optimisticProduct}
          user={user}
          addOptimisticProduct={addOptimisticProduct}
        />
    </div>
  )
}

export default OptimisticComponent