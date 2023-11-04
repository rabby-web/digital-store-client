import { FaSackDollar } from "react-icons/fa6";
import { BiSolidDiscount } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
const DealSection = () => {
  return (
    <div>
      <div className="text-[#387DF8] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 mx-3">
        <div className="border flex justify-center items-center gap-4 p-3 bg-[#E76D66] text-white rounded-xl">
          <div className="text-6xl ">
            <AiFillCar></AiFillCar>
          </div>
          <div>
            <p className="text-2xl font-semibold">FREE SHIPPING</p>
            <p className="text-lg font-medium">Free Shipping All Product.</p>
          </div>
        </div>
        <div
          className="border flex justify-center items-center gap-4 p-3 bg-[#95BB7A] text-white rounded-xl"
          data-aos="fade-down"
        >
          <div className="text-6xl">
            <FaSackDollar></FaSackDollar>
          </div>
          <div>
            <p className="text-2xl font-semibold">MONEY BACK</p>
            <p className="text-lg font-medium">
              Cras purus odio, in tempus viverra turpis.
            </p>
          </div>
        </div>
        <div
          className="border flex justify-center items-center gap-4 p-3 bg-[#57A6B9] text-white rounded-xl"
          data-aos="fade-up"
        >
          <div className="text-6xl ">
            <BiSolidDiscount></BiSolidDiscount>
          </div>
          <div>
            <p className="text-2xl font-semibold">DISCOUNTS</p>
            <p className="text-lg font-medium">
              Cras sit amet nibh libero itudin commo.
            </p>
          </div>
        </div>
        <div
          className="border flex justify-center items-center gap-4 p-3 bg-[#8AA5A0] text-white rounded-xl"
          data-aos="fade-down"
        >
          <div className="text-6xl ">
            <BiSupport></BiSupport>
          </div>
          <div>
            <p className="text-2xl font-semibold">SUPPORT</p>
            <p className="text-lg font-medium">
              Cras sit amet nibh libero, in viverra turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
