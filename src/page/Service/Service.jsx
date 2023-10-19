import { AiFillApple } from "react-icons/ai";
import { SiSamsung, SiSony, SiToshiba } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";

const Service = () => {
  return (
    <div>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] m-3 text-black dark:text-white ">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Services
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white dark:bg-slate-800 p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <AiFillApple className="text-3xl text-white"></AiFillApple>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Apple Specialists are here for you.
                </h4>
                <p className="text-body-color">
                  Need help finding what’s right for you? Shop with a Specialist
                  online. Or reserve a shopping session at an Apple Store.
                  American Sign Language interpreters are also available in
                  stores and online through SignTime.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white dark:bg-slate-800 p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <SiSamsung className="text-3xl text-white"></SiSamsung>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Shop all latest offers and innovations
                </h4>
                <p className="text-body-color">
                  As part of Generation AI, you have expectations, needs and
                  productivity goals for everything you do, including your
                  photography. And you want to be powered up with tools that
                  will take you to the next level.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white  dark:bg-slate-800 p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <BsMicrosoft className="text-3xl text-white"></BsMicrosoft>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  The Total Economic Microsoft Teams
                </h4>
                <p className="text-body-color">
                  Read The 2023 Total Economic Impact™ of Microsoft Teams, a
                  commissioned study conducted by Forrester Consulting, to learn
                  how using Teams delivered a 291% ROI and net benefit value of
                  $35 million over three years.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white dark:bg-slate-800  p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <SiSony className="text-3xl text-white"></SiSony>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Sony Group Corporation
                </h4>
                <p className="text-body-color">
                  Sony Group Corporation, formerly Tokyo Telecommunications
                  Engineering Corporation and Sony Corporation, is a Japanese
                  multinational conglomerate corporation headquartered in
                  Minato,
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white dark:bg-slate-800  p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <SiToshiba className="text-3xl text-white"></SiToshiba>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Toshiba Group
                </h4>
                <p className="text-body-color">
                  Toshiba Group is responding to the global coronavirus pandemic
                  with measures that prioritize the safety of our employees and
                  their families, and of our customers and business partners.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white dark:bg-slate-800  p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <FiMonitor className="text-3xl text-white"></FiMonitor>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  LG Corporation
                </h4>
                <p className="text-body-color">
                  LG Corporation, formerly known as Lucky-Goldstar, is a South
                  Korean multinational conglomerate founded by Koo In-hwoi and
                  managed by successive generations of his family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
