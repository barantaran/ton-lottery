import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import CharCard from "./CharCard";

const CharsGallery = () => (
  <Swiper
    grabCursor={true}
    effect={"creative"}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    }}
    modules={[EffectCreative]}
    className="mySwiper"
  >
    <SwiperSlide className={'card-background pirate-bay-at-night'}>
      <CharCard name={"wolf"} background={"/pirate_theme_background.webp"} />
    </SwiperSlide>
    <SwiperSlide  className={'card-background burning-deck'}>
      <CharCard name={"lion"} />
    </SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
);

export default CharsGallery;
