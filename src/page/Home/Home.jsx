import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DealSection from "../DealSection/DealSection";
import BrandName from "../BrandName/BrandName";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <DealSection></DealSection>
      <BrandName brands={brands}></BrandName>

      <h2 className="text-center text-3xl">This is home</h2>
    </div>
  );
};

export default Home;
