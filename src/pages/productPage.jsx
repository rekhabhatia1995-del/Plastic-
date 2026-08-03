
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBanner from "../components/productpage/ProductBanner";
import PlasticBanner from "../components/productpage/PlasticBanner";
import ProductSidebar from "../components/productpage/ProductSidebar";
import ProductGrid from "../components/productpage/ProductGrid";
import BulkOrderSection from "../components/productpage/BulkOrderSection";
import ProductSection from "../components/productpage/ProductSection";

function ProductPage() {
  return (
    <>
      <Header />
      <ProductBanner />
      <ProductSection />
      <PlasticBanner />

      <Footer />
    </>
  )
}
export default ProductPage;
