import Header from "../components/Header";
import HeroSection from "../components/homepage/HeroSection";
import Footer from "../components/Footer";
import CardSection from "../components/homepage/CardSection";
import FeatureProduct from "../components/homepage/FeatureProduct";
import IndustrialCard from "../components/homepage/IndustrialCard";
import NewArrival from "../components/homepage/NewArrival";
import WhyChoose from "../components/homepage/WhyChoose";
import OurGallery from "../components/homepage/OurGallery";
import LatestBlog from "../components/homepage/LatestBlog";

function HomePage() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <CardSection />
        <FeatureProduct />
        <IndustrialCard />
        <NewArrival />
        <WhyChoose />
        <OurGallery />
        <LatestBlog />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;

