import { Routes, Route } from "react-router-dom";
import ShowProducts from "../components/ShowProducts";
import CreateProduct from "../components/CreateProduct";
import EditProduct from "../components/EditProduct";
import ViewProduct from "../components/ViewProduct";
import AdminRestaurants from "../layouts/Adminrestaurant";

const DashboardPage = () => {
  return (
    <div>

      <AdminRestaurants />

    <div className="container">
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/view/:id" element={<ViewProduct />} />
      </Routes>
    </div>
    </div>
  );
};

export default DashboardPage;
