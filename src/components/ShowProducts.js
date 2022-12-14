import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`);
    getAllProducts();
  };

  return (
    <div>
      <h1 className="text-center mt-5">Admin dashboard</h1>
      <div className="mt-5">
        <Link to="/create" className="btn bg-dark btn-lg mt-2 mb-2 text-white">
          Add Product
        </Link>
      </div>

      <table className="table mt-5 mb-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td> {product.description} </td>
              <td> {product.price} </td>
              <td> {product.stock} </td>
              <td>
                <Link to={`/view/${product}`} className="btn btn-info">
                  View
                </Link>
                <Link
                  to={`/edit/${product.id}`}
                  className="btn btn-success mx-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
