import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BulkOrderPage from "../pages/BulkOrderPage";
import ProductPage from "../pages/productPage";
import CatageriesPage from "../pages/catageriesPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Data */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/bulkorder" element={<BulkOrderPage />}/>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/catageries" element={<CatageriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;