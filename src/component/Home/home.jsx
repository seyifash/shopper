import Deals from "./deals";
import Footer from "../Layout/Footer";
import HeroStore from "./hero";
import NavBar from "../Layout/navbar";
import TrendingProducts from "./trendingProduct";
import NewsLetter from "../Layout/Newsletter";


export default function HomeComponent() {

  return (
    <div>
      <NavBar />
      <HeroStore />
      <TrendingProducts />
      <Deals />
      <NewsLetter />
      <Footer />
    </div>
  );
}
