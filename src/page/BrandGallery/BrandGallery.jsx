import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandGallery = ({ oneBrand }) => {
  const { _id, image, name, brand, type, price, rating } = oneBrand || {};

  return (
    <div>
      <div className="relative flex border flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            className="h-64 object-cover"
            src={image}
            alt="ui/ux review check"
          />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="px-6 mt-4">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-2xl   antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h5>
            <p className="flex items-center gap-1.5 font-sans text-base leading-relaxed text-blue-gray-900 antialiased font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mt-0.5 h-5 w-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {rating}
            </p>
          </div>

          <div className="flex justify-between text-lg text-[#E76D66]">
            <h1 className="font-semibold">Brand: {brand}</h1>
            <h1 className="font-semibold">Price: {price} $</h1>
          </div>

          <div className="my-2">
            <h1 className="font-semibold text-lg">Type: {type}</h1>
          </div>
        </div>
        <div className="p-4 flex justify-between">
          <Link>
            <button
              type="button"
              className="text-white bg-[#E76D66] hover:bg-[#E76D66]border border-[#E76D66]ont-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Details
            </button>
          </Link>

          <Link to={`/products/${_id}`}>
            <button
              type="button"
              className="text-text-[#E76D66] hover:text-white border border-[#E76D66] hover:bg-[#E76D66] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

BrandGallery.propTypes = {
  oneBrand: PropTypes.object.isRequired,
};

export default BrandGallery;
