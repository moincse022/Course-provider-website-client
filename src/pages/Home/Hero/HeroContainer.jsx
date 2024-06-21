// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import  'swiper/css/effect-creative';
import {EffectCreative} from 'swiper';
import Hero from "./Hero";
import Hero1 from "./Hero1";
const HeroContainer = () => {
  return (
    <section>
      <Swiper
         effect={"creative"}
         grabCursor={true}
         creativeEffect={{
             prev: {
                 shadow: true,
                 translate: ["-120%", 0, -500],
             },
             next: {
                shadow: true,
                translate: ["-120%", 0, -500],
             },
         }}
         modules={[EffectCreative]}
         className="mySwiper"
        //  onSlideChange={() => {

        //      // console.log('slide change');
        //  }}
        Loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
    //      onSwiper={(swiper) => {
    //      }}
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Hero1 />
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default HeroContainer;
