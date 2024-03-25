import Categories from "@/components/UI/HomePage/Categories/Categories";
import FlashSale from "@/components/UI/HomePage/FlashSale/FlashSale";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FlashSale />
      <Categories />
      {/* <TrendingProducts /> */}
    </div>
  );
};

export default HomePage;
