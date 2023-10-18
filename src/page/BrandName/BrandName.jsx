import BrandCard from "../BrandCard/BrandCard";
import PropTypes from "prop-types";

const BrandName = ({ brands }) => {
  //   console.log(brands);
  return (
    <div>
      <h2 className="text-center font-semibold text-4xl p-5">
        Brands Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

BrandName.propTypes = {
  brands: PropTypes.object.isRequired,
};
export default BrandName;
