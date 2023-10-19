import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DealSection from "../DealSection/DealSection";
import BrandName from "../BrandName/BrandName";
import Service from "../Service/Service";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <DealSection></DealSection>
      <div className="my-6">
        <BrandName brands={brands}></BrandName>
      </div>
      <div>
        <Service></Service>
      </div>
    </div>
  );
};

export default Home;
