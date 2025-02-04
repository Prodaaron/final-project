import React, { useEffect, useState } from "react";
import axios from "axios";

const products = () => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }

    fetchProducts();
  })

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => {
          <div key={product.product_id} className="product-container">
            <img src={product.product_image} alt="Product-image" />

            <div className="product-info">
              <h3>{product.product_name}</h3>
              <p>{product.product_price}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default products
