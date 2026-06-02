import React from 'react'

//create a component named product card\
export function ProductCard({image,title,price}){
    return(
      <div className='product-card'>
        <img src={image} alt={title} className='product-img'></img>
        <span className='product-title'>{title}</span>
        <span className='product-price'>₹{price}</span>
      </div>
    )
}