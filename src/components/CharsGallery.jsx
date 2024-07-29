import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import CharCard from "./CharCard";

const Characters = [
  {
    name: 'Руна Лавинка',
    img: 'fox_char.png',
    trials: '1 попытка',
    cost: 1,
    trophies: 623,
    jackpot: 10000,
    theme: 'orange'
  },
  {
    name: 'Серый Шторм',
    img: 'wolf_char.png',
    trials: '3 попытки',
    cost: 3,
    trophies: 891,
    jackpot: 25000,
    theme: 'violet'
  },
  {
    name: 'Лев Риф',
    img: 'fox_char.png',
    trials: '5 попыток',
    cost: 5,
    trophies: 1085,
    jackpot: 50000,
    theme: 'red'
  },
  {
    name: 'Громилаг',
    img: 'bear_char.png',
    trials: '10 попыток',
    cost: 10,
    trophies: 1385,
    jackpot: 100000,
    theme: 'red'
  }
];

const CharsGallery = () => (
  <Swiper
    style={{
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff",
    }}
    speed={600}
    parallax={true}
    navigation={true}
    modules={[Parallax, Pagination, Navigation]}
    className="mySwiper"
  >
    <div
      slot="container-start"
      className="parallax-bg"
      style={{
        backgroundImage: "url(/scifi_background.webp)",
      }}
      data-swiper-parallax="-20%"
    >
      <div className="bird-container bird-container--one">
        <div className="bird bird--one"></div>
      </div>
    </div>
    {Characters.map((character, index) => (
      <SwiperSlide key={index}>
        <div
          className={`title underdog-regular char-name ${character.theme}`}
          data-swiper-parallax="-600"
        >
          {character.name}
        </div>
        <div
          className={`subtitle underdog-regular char-stats ${character.theme}`}
        >
          <div className="char-stat-line" data-swiper-parallax="-400">Добыча</div>
          <div data-swiper-parallax="-400">{character.trophies} TON</div>
          <div className="char-stat-line" data-swiper-parallax="-250">Большой трофей</div>
          <div data-swiper-parallax="-250">{character.jackpot} TON</div>
        </div>
        <div
          className="subtitle underdog-regular text-shadow text-overlay char-contract chalk-board"
          data-swiper-parallax="-300"
        >
          <div>КОНТРАКТ:</div>
          <br />
          <div>{character.cost} TON</div>
          <div>{character.trials}</div>
        </div>
        <div data-swiper-parallax="-100">
          <CharCard charImg={`/${character.img}`} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default CharsGallery;
