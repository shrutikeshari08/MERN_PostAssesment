import React from 'react'
import axios from "axios";
import React, { useEffect, useState } from "react";

const ShoppingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3006/products");
      console.log(res.data);

      // If API returns an array
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error loading products:", err);
      setProducts([]);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Product List</h2>

      <table className="table table-bordered table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th style={{ width: "200px" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id || product._id}>
                <td>{product.id || product._id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">
                    Update
                  </button>

                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingPage;
