import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getAllRestaurants();
  }, []);

  const getAllRestaurants = async () => {
    const response = await axios.get(`${endpoint}/restaurants`);
    setRestaurants(response.data);
  };

  const deleteRestaurant = async (id) => {
    await axios.delete(`${endpoint}/restaurant/${id}`);
    getAllRestaurants();
  };

  return (
    <div>
      <h1 className="text-center mt-5">Admin dashboard</h1>
      <div className="mt-5">
        <Link to="/create" className="btn bg-dark btn-lg mt-2 mb-2 text-white">
          Add Restaurant
        </Link>
      </div>

      <table className="table mt-5 mb-5">
        <thead>
          <tr>
            <th>Tilte</th>
            <th>Code</th>
            <th>Adress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td> {restaurant.title} </td>
              <td> {restaurant.code} </td>
              <td> {restaurant.adress} </td>
              <td>
                <Link to={`/view/${restaurant}`} className="btn btn-info">
                  View
                </Link>
                <Link
                  to={`/edit/${restaurant.id}`}
                  className="btn btn-success mx-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteRestaurant(restaurant.id)}
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

export default ShowRestaurants;
