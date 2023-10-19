import PropTypes from "prop-types";
import Swal from "sweetalert2";

const SingleCard = ({ cart, setBrandCarts, brandCarts }) => {
  console.log(brandCarts);

  const { _id, image, name, brand, type, price } = cart || {};

  const hanldeDelete = async (_id) => {
    try {
      const response = await fetch(
        `https://digital-store-server-6v0qbtfse-rabby-webs-projects.vercel.app/carts/${_id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result.deletedCount > 0) {
        const filterCart = brandCarts.filter((cart) => cart._id !== _id);
        setBrandCarts(filterCart);
        Swal.fire("Delete", "Successfully Delete", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={image}
            alt="image"
            className="object-cover w-full min-h-[215px]"
          />
        </div>
        <div className="p-6 w-3/5">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="my-2 text-md w-full text-sky-800">
            <h1 className="font-semibold">Brand: {brand}</h1>
            <h1 className="font-semibold">Price: {price} $</h1>
          </div>

          <div className="my-2">
            <h1 className="font-semibold text-md">Type: {type}</h1>
          </div>

          <div className="flex justify-end">
            <div onClick={() => hanldeDelete(_id)}>
              <button
                type="button"
                className="text-white bg-sky-700 hover:bg-sky-800 border border-sky-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleCard.propTypes = {
  cart: PropTypes.object.isRequired,
  setDeletedId: PropTypes.func,
  setBrandCarts: PropTypes.func,
  brandCarts: PropTypes.array,
};

export default SingleCard;
