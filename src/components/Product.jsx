import React from 'react'
import Button from './Button'
import '../styles/Product.scss'


function Product({prodData}) {
  return (
    <div className="product-card">
        <img src={prodData.img} alt="Product" />
        <div className="product-body">
            <h4 className="title">
                {prodData.title}
            </h4>
            <p className="desc">
                {prodData.description}
            </p>
            <div className="price-order">
                <p className="price">
                   ${prodData.price}0
                </p>
                <Button text="Order now"></Button>
            </div>
        </div>
    </div>
  )
}

export default Product