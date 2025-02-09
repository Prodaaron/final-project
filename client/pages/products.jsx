import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        console.log("API Response:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.product_id}
            className="product-container"
            onClick={() => setSelectedProduct(product)} // Open modal
          >
            <img
              src={product.product_image}
              alt="Product"
              className="product-img"
            />
            <div className="product-info">
              <h3>{product.product_name}</h3>
              <p>${product.product_price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>✖</button>
            <img src={selectedProduct.product_image} alt="Product" className="modal-img" />
            <h2>{selectedProduct.product_name}</h2>
            <p><strong>Price:</strong> ${selectedProduct.product_price}</p>
            <p><strong>Description:</strong> {selectedProduct.product_description}</p>

            {/* Add to cart button */}
            <button className="order-btn">Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;