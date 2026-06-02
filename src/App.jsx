import React, { useEffect, useState } from 'react'
import "./index.css"
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { limit_size } from './Constants';
import { ProductCard } from './components/ProductCard';



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

  function handlePageChange(n){
    console.log(n)
    setCurrentPage(n);
  }

  return (
    <div className='parent-class'>
      <h2>Pagination</h2>
      <div className='pagination-container'>
        <button disabled={currentPage===0} className='page-number'onClick={()=>setCurrentPage(prev=>prev-1)}><FaCircleArrowLeft /></button>
        {
          [...Array(noOfPages).keys()].map((n)=>(
            <button  className={`page-number  ${currentPage === n ? "active":""}`} onClick={()=>handlePageChange(n)} key={n}>{n}</button>
          ))
        }
        <button className='page-number' disabled={currentPage === noOfPages-1} onClick={()=>setCurrentPage(prev=>prev + 1)}><FaCircleArrowRight/></button>
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