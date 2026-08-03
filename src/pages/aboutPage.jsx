import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "../components/aboutpage/AboutBanner";
import CompanyIntro from "../components/aboutpage/CompanyIntro";
import AboutWhyChooseUs from "../components/aboutpage/AboutWhyChooseUs";
import Infrastructure from "../components/aboutpage/Infrastructure";
import MissionVisionValues from "../components/aboutpage/MissionVisionValues";
import IndustrySection from "../components/aboutpage/IndustrySection";
import Testimonials from "../components/aboutpage/Testimonials";
import ContactCTA from "../components/aboutpage/ContactCTA";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutBanner />
      <CompanyIntro />
      <AboutWhyChooseUs />
      <Infrastructure />
      <MissionVisionValues />
      <IndustrySection />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default AboutPage;
