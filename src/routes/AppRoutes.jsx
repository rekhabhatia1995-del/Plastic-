import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BulkOrderPage from "../pages/BulkOrderPage";
import ProductPage from "../pages/productPage";
import CatageriesPage from "../pages/catageriesPage";
import ContactPage from "../pages/contactPage";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/bulkorder" element={<BulkOrderPage />}/>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/catageries" element={<CatageriesPage />} />
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;