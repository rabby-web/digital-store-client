import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Banner = () => {
  return (
    <div>
      <div className="w-full h-[60vh] justify-center bg-[url(https://img.freepik.com/free-photo/motherboard-circuit-technology-remixed-media_53876-124660.jpg?w=1380&t=st=1697553111~exp=1697553711~hmac=c04572622c3b165cd8dab26576c564011892e08c1a3394c772480a86d3e7614d)] bg-no-repeat bg-cover bg-center">
        <div className="text-center bg-[#1f07255e] h-full w-full flex items-center justify-center">
          <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-5 p-2">
            <div className=" space-y-3">
              <h1 className="text-3xl font-bold text-[#E76D66]">
                Discount <span className="text-orange-700">20%</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold inline-block p-2 rounded-md bg-[#1306098e] text-[#E76D66]">
                Digital Store
              </h2>
              <p className="text-white text-lg">
                A discount is a reduction in the price of a service or a
                product.
              </p>
              <button className="bg-[#E76D66] text-white text-xl font-semibold py-3 px-5 rounded flex justify-center items-center mb-6 mx-auto md:text-block">
                Explore More{" "}
                <MdKeyboardDoubleArrowRight className="text-2xl font-bold"></MdKeyboardDoubleArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
