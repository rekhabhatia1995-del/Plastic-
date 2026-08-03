
import FeaturedCategories from "../components/catageries/FeaturedCatageries";
import PopularCategories from "../components/catageries/PopularCategories";
import IndustrySection from "../components/catageries/IndustrySection";
import HeroCatageries from "../components/catageries/HeroCatageries";
import ShopCategories from "../components/catageries/ShopCatageries";
import ShopCategorySection from "../components/catageries/ShopCategorySection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReviewFaqSection from "../components/catageries/ReviewFaqSection";
import BottomSection from "../components/catageries/BottomSection";
import BestSellingNewArrival from "../components/catageries/BestSellingNewArrival";
import NeedBulkManufacturingSection from "../components/catageries/NeedBulkManufacturingSection";

function catageriesPage (){
    return (
        <>
        <Header />
        <HeroCatageries  />
        <ShopCategories  />
        <FeaturedCategories  />
        <PopularCategories />
        <IndustrySection />
        <BestSellingNewArrival />
        <ShopCategorySection />

        <NeedBulkManufacturingSection />
        <ReviewFaqSection  />
        <BottomSection  />
        <Footer  />

        </>
    )
}
export default catageriesPage;
