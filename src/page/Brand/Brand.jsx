import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Brand = () => {
  const [gBrand, setGBrand] = useState({});

  const totalBrand = useLoaderData();
  const brand_name = useParams();
  console.log(totalBrand, brand_name);

  useEffect(() => {
    const filterBrand = totalBrand.find(
      (brand) =>
        brand.brand_name.toLowerCase() == brand_name.brand_name.toLowerCase()
    );

    setGBrand(filterBrand);
  }, [totalBrand, brand_name]);

  return (
    <div>
      <h2>Brand: {gBrand.brand_name}</h2>
    </div>
  );
};

export default Brand;
