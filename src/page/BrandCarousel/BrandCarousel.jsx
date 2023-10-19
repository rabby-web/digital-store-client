import PropTypes from "prop-types";

const BrandCarousel = ({ gBrand }) => {
  const { slider_1, slider_2, slider_3 } = gBrand || {};
  return (
    <div className="w-3/4 mx-auto h-[60vh]">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider_1} className="w-full object-cover h-[60vh]" />
          <div className="absolute flex justify-between left-5 right-5 items-center h-[60vh]">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider_2} className="w-full object-cover h-[60vh]" />
          <div className="absolute flex justify-between left-5 right-5 items-center h-[60vh]">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider_3} className="w-full object-cover h-[60vh]" />
          <div className="absolute flex justify-between left-5 right-5 items-center h-[60vh]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandCarousel.propTypes = {
  gBrand: PropTypes.object.isRequired,
};
export default BrandCarousel;
