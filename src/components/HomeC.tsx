import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../../img/image.png';
import slide2 from '../../img/image1.png';
import slide3 from '../../img/image2.png';

function HomeC() {
  const navigate = useNavigate();

  const handleVolunteerClick = () => {
    navigate('/login');
  };

  return (
    <div className="bg-white">
      {/* Main Carousel Section */}
      <main className="p-6">
        <section>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col w-[70vw] h-[35vw] items-center mx-auto">
                <img src={slide1} alt="Slide 1" className="rounded-lg shadow-lg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[70vw] h-[35vw] items-center mx-auto">
                <img src={slide2} alt="Slide 2" className="rounded-lg shadow-lg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col w-[70vw] h-[35vw] items-center mx-auto">
                <img src={slide3} alt="Slide 3" className="rounded-lg shadow-lg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="text-center my-20 ml-[6vw]"> 
          <div className="bg-[#ffff] text-black w-[30vw] ml-[27vw] h-[18vw] p-6 rounded-lg shadow-2xl">
            <h3 className="text-xl font-semibold text-black mb-4">Voluntário</h3>
            <p className="text-lg mt-[3vw]">
              Faça parte do nosso time de voluntários e ajude a transformar vidas!
            </p>
            <button onClick={handleVolunteerClick} className="mt-4 bg-gray-500 text-white px-6 py-2 rounded-md">
              Seja Voluntário
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeC;
