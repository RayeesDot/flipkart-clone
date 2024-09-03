import React, { useEffect, useState } from "react";
import '../assets/css/carousel.css';

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details from the server
  const fetchProductDetails = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProductDetails();
  }, []);

  // Update the current image index every 3 seconds
  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="p-2 d-flex bg-primary">
      <div className="d-flex align-items-center">
        <p>{products[currentImageIndex].name}</p>
      </div>
      <div className="myCarousel text-center">
        <img className="w-h" src={products[currentImageIndex].image_url} alt="carouselImg" />
      </div>
      <div className="d-flex align-items-center">
        <p>{products[currentImageIndex].description}</p>
      </div>
    </div>
  );
};

export default Carousel;
