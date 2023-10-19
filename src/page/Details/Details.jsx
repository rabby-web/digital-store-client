import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Details = () => {
  const detailsProduct = useLoaderData();
  // _id

  const { image, name, brand, type, price, rating, description } =
    detailsProduct || {};

  const handleAddCart = async (detailsProduct) => {
    try {
      const response = await fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detailsProduct),
      });
      const result = await response.json();
      console.log(result);

      if (result.acknowledged) {
        alert("cart Added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 my-10">
      <div className="p-4 shadow-xl border rounded-lg">
        <img
          className="w-full max-h-[500px] object-cover rounded-lg"
          src={image}
          alt=""
        />
        <h1 className="text-2xl md:text-4xl font-bold my-4">{name}</h1>
        <div className="flex justify-between text-lg md:text-xl font-semibold text-sky-800">
          <h1>Brand: {brand}</h1>
          <h1>Price: {price} $</h1>
        </div>
        <div className="my-2 flex text-xl gap-3">
          <p className="font-bold">{rating}</p>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-400"
              checked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-400"
            />
          </div>
        </div>
        <h1 className="text-lg font-semibold my-1">{type}</h1>
        <h1 className="text-gray-500 my-1">{description}</h1>

        <div className="flex justify-end mt-4 mb-1">
          <div onClick={() => handleAddCart(detailsProduct)}>
            <button className="bg-[#E76D66] hover:bg-white text-white hover:text-[#E76D66] text-xl font-semibold border-2 flex gap-3 items-center px-4 py-1 rounded border-[#E76D66]">
              <AiOutlineShoppingCart /> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
