import { useEffect, useRef, lazy } from 'react';
import { register } from 'swiper/element/bundle';
import sliderStyle from '../style/slider/slider.css?inline';

import picture1 from '../assets/images/photo1.jpg';
import picture1_768 from '../assets/images/responsive/photo1-768w.webp';
import picture1_1024 from '../assets/images/responsive/photo1-1024w.webp';

import picture2 from '../assets/images/photo2.jpg';
import picture2_768 from '../assets/images/responsive/photo2-768w.webp';
import picture2_1024 from '../assets/images/responsive/photo2-1024w.webp';

import picture3 from '../assets/images/photo3.jpg';
import picture3_768 from '../assets/images/responsive/photo3-768w.webp';
import picture3_1024 from '../assets/images/responsive/photo3-1024w.webp';

const pictures = [
   { picJpeg: picture1, picSmall: picture1_768, picLarge: picture1_1024 },
   { picJpeg: picture2, picSmall: picture2_768, picLarge: picture2_1024 },
   { picJpeg: picture3, picSmall: picture3_768, picLarge: picture3_1024 },
];

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
                        <a
                           href={picture.picJpeg}
                           data-fancybox='gallery'
                           aria-label='zoom'
                        >
                           <img
                              src={picture.picJpeg}
                              alt='slide'
                              height='420px'
                              width='900px'
                              srcSet={` ${picture.picSmall} 768w, ${picture.picLarge} 1024w`}
                              sizes='(max-width: 500px) 50vw, 100w'
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
