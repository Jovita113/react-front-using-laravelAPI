import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/restaurant/";

const EditRestaurant = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState(0);
  const [adress, setAdress] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      title: title,
      code: code,
      adress: adress,
    });
    navigate("/");
  };

  useEffect(() => {
    const getRestaurantById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setTitle(response.data.title);
      setCode(response.data.code);
      setAdress(response.data.adress);
    };
    getRestaurantById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3 className="mt-5 text-center">Edit Restaurant</h3>
      <form onSubmit={update}>
        <div className="mb-3 mt-5">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Code</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Adress</label>
          <input
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditRestaurant;
