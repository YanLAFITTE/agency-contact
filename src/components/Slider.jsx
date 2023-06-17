import { useEffect, useRef, lazy } from 'react';
import { register } from 'swiper/element/bundle';
import sliderStyle from '../style/slider/slider.css?inline';

import picture1 from '../assets/images/photo1.webp';
import picture2 from '../assets/images/photo2.webp';
import picture3 from '../assets/images/photo3.webp';

const pictures = [picture1, picture2, picture3];

const Fancybox = lazy(() => import('../components/Fancybox'));

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
         injectStyles: [sliderStyle],
      };

      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
   }, []);

   return (
      <div className='slider'>
         <Fancybox
            options={{
               Carousel: {
                  infinite: true,
               },
            }}
         >
            <swiper-container ref={swiperRef} init='false'>
               {pictures &&
                  pictures.map((picture, id) => (
                     <swiper-slide key={id}>
                        <a href={picture} data-fancybox='gallery'>
                           <img
                              src={picture}
                              alt=''
                              height='420px'
                              width='900px'
                           />
                        </a>
                     </swiper-slide>
                  ))}
            </swiper-container>
         </Fancybox>
      </div>
   );
};

export default Slider;
