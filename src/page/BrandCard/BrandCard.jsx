import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  const { brand_name, img } = brand || {};
  //   console.log(brand);
  return (
    <div>
      <Link to={`/brand/${brand_name}`}>
        <div className="p-4 border shadow-xl rounded-lg cursor-pointer">
          <img
            className="w-full rounded-lg h-72 object-cover"
            src={img}
            alt=""
          />
          <h1 className="text-center mb-4 mt-6 text-2xl font-bold text-black dark:text-white">
            {brand_name}
          </h1>
        </div>
      </Link>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default BrandCard;
