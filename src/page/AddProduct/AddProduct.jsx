// import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const newCoffee = {
      name,
      type,
      price,
      description,
      rating,
      image,
    };
    console.log(newCoffee);

    // fetch(
    //   "https://coffee-store-server-69gxgpo3p-rabby-webs-projects.vercel.app/coffee",
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(newCoffee),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal({
    //         title: "Successfully Added Coffee!",
    //         text: "Successfully Added Coffee to MongoDB!",
    //         icon: "success",
    //       });
    //     }
    //   });
  };
  return (
    <div className="bg-[#F4F3F0] rounded-md p-3 md:p-20 my-6 mx-2">
      <h2 className="text-3xl font-extrabold text-center text-[#E76D66]">
        Add Product
      </h2>
      <form onSubmit={handleCoffee}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-black">Image</span>
            </label>
            <label className="">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-2">
            <label className="label">
              <span className="label-text text-lg text-black">Name</span>
            </label>
            <label className="">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* ---- */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label">
              <span className="label-text text-lg text-black">Type</span>
            </label>
            <label className="">
              <input
                type="text"
                name="type"
                placeholder="Product Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-black">Price</span>
            </label>
            <label className="">
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* ---- */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label">
              <span className="label-text text-lg text-black">
                Short description
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="description"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-black">Rating</span>
            </label>
            <label className="">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Add Product"
            className="bg-[#E76D66] text-white w-1/2 m-2 rounded-lg py-3 px-4 my-5 text-xl font-semibold"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
