import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop={true}
    >
      <div>
        <img
          alt="SliderImg"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/def1ea89bd2f410a.jpg?q=20"
        />
      </div>
      <div>
        <img
          alt="SliderImg"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f9355e724c96b043.jpeg?q=20"
        />
      </div>
      <div>
        <img
          alt="SliderImg"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/36edcda6bdf9ca8a.jpg?q=20"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
