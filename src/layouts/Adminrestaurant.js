import { Routes, Route } from "react-router-dom";
import ShowRestaurants from "../components/restaurants/ShowRestaurants";
import CreateRestaurant from "../components/restaurants/CreateRestaurant";
import EditRestaurant from "../components/restaurants/EditRestaurant";
import ViewRestaurant from "../components/restaurants/ViewRestaurant";

const AdminRestaurant = () => {
    return (
        <div>
           <div className="container">
      <Routes>
        <Route path="/" element={<ShowRestaurants />} />
        <Route path="/create" element={<CreateRestaurant />} />
        <Route path="/edit/:id" element={<EditRestaurant />} />
        <Route path="/view/:id" element={<ViewRestaurant />} />
      </Routes>
    </div> 
        </div>
    );
};

export default AdminRestaurant;