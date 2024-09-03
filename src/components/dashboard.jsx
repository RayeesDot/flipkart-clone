import { useEffect, useState } from "react";
import "../assets/css/dashboard.css"
import { Link } from 'react-router-dom'


const Dashboard = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const fetchProducts = async () => {
    try {
      const productResp = await fetch('http://localhost:3001/products');
      const productResponse = await productResp.json();
      setProducts(productResponse)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
     fetchProducts()
  }, []);
  
  if (loading) {
    return <div>loading...</div>
  }

  return (
    <>
     <div className="container py-4">
     <div className="row row-cols-1 row-cols-md-2 g-4">
        {
          products.map((value, index) => {
            return (

              <div key={index} className="col">
                <div className="card text-center">
                <Link to={`/product-details/${value.id}`}> <img src={value.image_url} className="card-img-top img-h-w m-auto pt-2" alt={value.name} /> </Link>
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <p className="card-text">{value.description}</p>
                    <p className="card-text">
                      Price: ₹<span className="text-primary">{value.price}</span>
                    </p>
                    <p className="card-text">
                      Rating: <span className="text-warning">{value.rating} ★</span> ({value.reviews} reviews)
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>
          

      )
      })
     }
    </div >
     </div>
    </>
  )
}
export default Dashboard