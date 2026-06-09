import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandsMarquee from '../components/home/BrandsMarquee';
import HappyClients from '../components/home/HappyClients';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TotemPOS from '../components/home/TotemPOS';
import ServicesSection from '../components/home/ServicesSection';
import Testimonials from '../components/home/Testimonials';
import InquiryForm from '../components/home/InquiryForm';
import GoogleMap from '../components/home/GoogleMap';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <HappyClients />
      <WhyChooseUs />
      <TotemPOS />
      <BrandsMarquee />
      <ServicesSection />
      <Testimonials />
      <InquiryForm />
      <GoogleMap />
    </>
  );
};

export default Home;
