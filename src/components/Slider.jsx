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
            .swiper-slide-active img {
               width: 100%;
               height: 420px;
               object-fit: cover;
               overflow: hidden;
               object-position: bottom;
            }
            
            .swiper-initialized {
               width: 100%;
               height: 420px;
            }
            
            @media (max-width: 992px) {
               .swiper-slide-active img, .swiper-slide-active, .swiper-initialized {
               height: 250px;
            }}
            
            .swiper-button-next,
            .swiper-button-prev {  
              background-image:  linear-gradient(90deg, #ed1e79, #6d0063);
              background-repeat: no-repeat;
              height: 60px;
              width: 60px;
              border-radius: 50%;
              position: absolute;
              top: calc(50% - 8px);
            }

            .swiper-button-next {
              right: 6%;
            } 

            .swiper-button-prev {
              left: 6%;
            }  

            .swiper-button-next::after,
            .swiper-button-prev::after {
              content: '';
              background-image:  url('./src/assets/chevron-white.png');
              background-repeat: no-repeat;
              background-size: 22px;
              height: 22px;
              width: 22px;
              color: #fff;
              position: absolute;
            }

            .swiper-button-next::after {
              transform: rotate(180deg);
              left: 22px; 
            }

            .swiper-button-prev::after {
              right: 22px; 
            }

            .swiper-pagination {
              margin-bottom: 30px;
            }

            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background: #fff;
              opacity: 1 ;
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
