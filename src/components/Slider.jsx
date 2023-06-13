// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

import picture1 from '../assets/images/photo1.jpg';
import picture2 from '../assets/images/photo2.jpg';
import picture3 from '../assets/images/photo3.jpg';
import { useEffect, useRef } from 'react';
import Fancybox from '../components/Fancybox';
import chevron from '../assets/chevron.svg';

// register Swiper custom elements
register();

const Slider = () => {
   const swiperRef = useRef(null);

   useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
         spaceBetween: 0,
         navigation: true,
         pagination: true,
         speed: 600,
         loop: true,
         injectStyles: [
            `
            .swiper-slide-active img  {
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
              right: 8%;
            } 

            .swiper-button-prev {
              left: 8%;
            }  

            .swiper-button-next::after,
            .swiper-button-prev::after {
              content: '';
              background-image:  url(${chevron});
              background-repeat: no-repeat;
              background-size: 29px;
              height: 29px;
              width: 29px;
              color: #fff;
              position: absolute;
              opacity: 0.6;
            }

            .swiper-button-next::after {
              left: 19px;
            }

            .swiper-button-prev::after {
              transform: rotate(180deg);
              right: 19px; 
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

          @media (max-width: 992px) {

            .swiper-slide-active img, 
            .swiper-slide-active, 
            .swiper-initialized {
               height: 250px;
            }

            .swiper-button-next,
            .swiper-button-prev {
               height: 50px;
               width: 50px;
            }

            .swiper-button-next::after {
               left: 16px;
               background-size: 24px;
               height: 24px;
            }

            .swiper-button-prev::after {
               right: 16px;
               background-size: 24px;
               height: 24px;
            }

            .swiper-pagination {
               margin-bottom: 10px;
             }
         }
          `,
         ],
      };

      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
   }, []);

   return (
      <div className='slider'>
         <Fancybox
            options={{
               Carousel: {
                  infinite: false,
               },
            }}
         >
            <swiper-container ref={swiperRef} init='false'>
               <swiper-slide>
                  <a href={picture1} data-fancybox='gallery'>
                     <img src={picture1} alt='open-space' />
                  </a>
               </swiper-slide>
               <swiper-slide>
                  <a href={picture2} data-fancybox='gallery'>
                     <img src={picture2} alt='co-working' />
                  </a>
               </swiper-slide>
               <swiper-slide>
                  <a href={picture3} data-fancybox='gallery'>
                     <img src={picture3} alt='salle de reunion' />
                  </a>
               </swiper-slide>
            </swiper-container>
         </Fancybox>
      </div>
   );
};

export default Slider;
