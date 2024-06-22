import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState(null)

    const { id } = useParams();

    useEffect(() => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);


  return (
    <div style={{width:'500px',display:'flex',justifyContent:'center' , alignItems:'center',margin:'auto'}}>
          <img src={product?.images[0]} alt="images"  width={150}/>
          <div>
              <h4>{product?.title}</h4>
              <p>{ product?.description}</p>
          </div>
          
    </div>
  )
}

export default ProductDetails
