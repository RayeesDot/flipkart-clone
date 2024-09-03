import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const ProductsDetails = () => {
  const {id} = useParams();
  const [product,setProducts] = useState(null);
  const [count,setCount] = useState(0)
  useEffect(()=>{
    const fetchProduct = async ()=>{
      try {
        const productsResp = await fetch(`http://localhost:3001/products/${id}`)
        const productData = await productsResp.json();
        setProducts(productData);
      }catch (error){
        console.error('error fetching products',error)
      }
    };

   fetchProduct()  
  },[id])

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart =()=>{
    setCount(count+1)
    alert(count)
  }

  return (
    <div className="container py-4">
      <div className="card text-center">
        <img src={product.image_url} className="card-img-top img-h-w m-auto pt-2" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            Price: ₹<span className="text-primary">{product.price}</span>
          </p>
          <p className="card-text">
            Rating: <span className="text-warning">{product.rating} ★</span> ({product.reviews} reviews)
          </p>
          <button onClick={addToCart} className='border-0 rounded bg-orange text-white'>Add to cart</button> <button className='border-0 rounded bg-danger text-white'>Remove from cart</button>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails
