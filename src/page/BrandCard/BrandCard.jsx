import { Link } from "react-router-dom";

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
          <h1 className="text-center mb-4 mt-6 text-xl font-bold">
            {brand_name}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
