import React, { useEffect, useState } from "react";
import axios from "axios";

const endpoint = "http://localhost:8000/api";

const ShowRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [ meniu, setMeniu] = useState('');

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const getAllRestaurants = async () => {
    const response = await axios.get(`${endpoint}/restaurants`);
    setRestaurants(response.data);
  };

  
  useEffect(() => {
    getAllMeniu();
  }, []);

  const getAllMeniu = async () => {
    const response = await axios.get(`${endpoint}/meniu`);
    setMeniu(response.data);
  };
  
  return (
    <div>
      <h1 className="text-center mt-5">Restaurant</h1>
      <table className="table mt-5 mb-5">
        <thead>
          <tr>
            <th>Tilte</th>
            <th>Code</th>
            <th>Adress</th>
            <th>Meniu</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td> {restaurant.title} </td>
              <td> {restaurant.code} </td>
              <td> {restaurant.adress} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowRestaurants;



// import React from "react";

// const Restaurant = () => {
//   return (
//     <div className="card mt-3 mb-3">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
//         className="card-img-top"
//         alt="Fissure in Sandstone"
//       />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//         <a href="#!" className="btn btn-primary">
//           Button
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Restaurant;
