import React from 'react'
import style from "./productCard.module.css"

export default function ProductCard({product}) {

  return (
    <div className={style.card}>
      <div className={style.details}>
        <span className={`${style.title}`}>
          {product.title}
        </span>
        <span className={`${style.title}`}>
        {product.description}
        </span>
        <span className={`${style.priceCard}`}>
        {product.category}   
             </span>
        <span className={`${style.priceCard}`}>
        {product.price}
        </span>

      </div>
    </div>
  )
}