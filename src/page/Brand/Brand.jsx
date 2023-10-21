import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AiOutlineStop } from "react-icons/ai";
import BrandGallery from "../BrandGallery/BrandGallery";

const Brand = () => {
  const [gBrand, setGBrand] = useState({});
  const [bProducts, setBProducts] = useState([]);
  const [flteredProducts, setFilterProducts] = useState([]);

  const totalBrand = useLoaderData();
  const brand_name = useParams();
  //   console.log(totalBrand, brand_name);

  useEffect(() => {
    const filterBrand = totalBrand.find(
      (brand) => brand.brand_name == brand_name.brand_name
    );

    setGBrand(filterBrand);
  }, [totalBrand, brand_name]);
  useEffect(() => {
    fetch(
      "https://digital-store-server-940h97fnc-rabby-webs-projects.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => setBProducts(data));
  }, []);

  useEffect(() => {
    const filterData = bProducts.filter(
      (product) => product.brand == brand_name.brand_name
    );
    setFilterProducts(filterData);
  }, [bProducts, brand_name]);
  {
    /* <BrandCarousel gBrand={gBrand}></BrandCarousel> */
  }
  return (
    <div>
      <div>
        <BrandCarousel gBrand={gBrand}></BrandCarousel>
      </div>
      <div>
        <div>
          {flteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
              {flteredProducts.map((oneBrand) => (
                <BrandGallery
                  key={oneBrand._id}
                  oneBrand={oneBrand}
                ></BrandGallery>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-[50vh] text-3xl font-bold">
              <div>
                <AiOutlineStop className="text-5xl text-red-600 mx-auto mb-5"></AiOutlineStop>
                <h1>No Product Here</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brand;
