import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/restaurant";

const CreateRestaurant = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState(0);
  const [adress, setAdress] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      title: title,
      code: code,
      adress: adress,
    });
    navigate("/");
  };

  return (
    <div>
      <h3 className="mt-5 text-center">Create Restaurant</h3>
      <form onSubmit={store}>
        <div className="mb-3 mt-5">
          <label className="form-label">Tilte</label>
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
          Store
        </button>
      </form>
    </div>
  );
};

export default CreateRestaurant;
