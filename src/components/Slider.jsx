// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

import picture1 from '../assets/photo1.jpg';
import picture2 from '../assets/photo2.jpg';
import picture3 from '../assets/photo3.jpg';
import { useEffect, useRef } from 'react';

// register Swiper custom elements
register();

const Slider = () => {
   const swiperRef = useRef(null);

   useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
         navigation: true,
         pagination: true,
         loop: true,
         injectStyles: [
            `
            .swiper-button-next,
            .swiper-button-prev {
              background-image:  linear-gradient(90deg, #ed1e79, #6d0063);
              background-repeat: no-repeat;
              background-size: 80px;
              height: 80px;
              width: 80px;
              border-radius: 100%;
              }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              content: '';
              background-image:  url('./src/assets/chevron-white.png');
              background-repeat: no-repeat;
              background-size: 30px;
              height: 30px;
              width: 30px;
              color: #fff;
            }

            .swiper-button-next::after {
              transform: rotate(180deg);
            }

            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background: #fff;
              opacity: 1 ;
              padding: 2px;
            
          }
          .swiper-pagination-bullet-active {
            background: #ed1e79;
         }
      `,
         ],
      };

      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
   }, []);

   return (
      <div className='slider'>
         <swiper-container ref={swiperRef} init='false'>
            <swiper-slide>
               <img src={picture1} alt='' />
            </swiper-slide>
            <swiper-slide>
               <img src={picture2} alt='' />
            </swiper-slide>
            <swiper-slide>
               <img src={picture3} alt='' />
            </swiper-slide>
         </swiper-container>
      </div>
   );
};

export default Slider;
