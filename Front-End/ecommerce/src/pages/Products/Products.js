import React, { useState ,useEffect} from 'react'
import ProductCard from '../../components/productCard'
import style from './products.module.css'
import axios from 'axios'
 

export const Products = () => {
const [products,setProducts]=useState([])

const getProducts=async() =>{
      try {
        const response = await axios.get(`${process.env.REACT_APP_PATH}products/All`);
        if (response) {
          setProducts(response.data);
          console.log(response.data)
        }
        else{
            console.log("No data")
        }
      } catch (error) {
        console.log("Error fetching products"+error.message);
      }
    
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (

    <div className={style.productsHolder}>
        {
            products&&(
                products.map((product,index)=>(
                    <ProductCard product={product} key={index}/>
                ))
            )
        }

    </div>
  )
}
