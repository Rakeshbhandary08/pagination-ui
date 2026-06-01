import React, { useEffect, useState } from 'react'
import "./index.css"

//create a component named product card\
function ProductCard({image,title,price}){
    return(
      <div className='product-card'>
        <img src={image} alt={title} className='product-img'></img>
        <span className='product-title'>{title}</span>
        <span className='product-price'>₹{price}</span>
      </div>
    )
}

const limit_size=10;

const App = () => {

  const [product,setProduct]=useState([]);
  const [currentPage,setCurrentPage]=useState(0);

  const fetchDate=async()=>{
    const data=await fetch("https://dummyjson.com/products?limit=500")  // http get call
   
    const json=await data.json()   //js object -> json format
    setProduct(json.products)
    
    
  }

  useEffect(()=>{
    fetchDate()
  },[])

  let totalLimit=product.length;
  let noOfPages=Math.ceil(totalLimit/limit_size)

  const start=currentPage*limit_size
  const end=start+limit_size

  return (
    <div className='parent-class'>
      <h2>Pagination</h2>
      <div className='pagination-container'>
        {
          [...Array(10).keys()].map((n)=>(
            <span className='page-number' key={n}>{n}</span>
          ))
        }
      </div>
      <div className='product-container'>
      {
        product.slice(start,end).map((p)=>(
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} price={p.price}/>
        ))
      }
      </div>
      
    </div>
  )
}

export default App