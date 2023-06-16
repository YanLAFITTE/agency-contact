import { Suspense, lazy } from 'react';
import phoneSvg from '../assets/phone.svg';
import localisationJpg from '../assets/images/localisation.webp';

const Slider = lazy(() => import('../components/Slider'));
const Map = lazy(() => import('../components/Map'));
const Form = lazy(() => import('../components/Form'));

const renderLoader = () => <p>Loading...</p>;

const Contact = () => {
   return (
      <>
         <section className='contact-section1'>
            <div className='contact-section1__container'>
               <div className='contact-section1__infos'>
                  <h1>How to contact us</h1>
                  <p>
                     rem ipsum dolor sit amet, consectetur adipisicing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostru
                  </p>
                  <div className='contact-section1__phone'>
                     <img
                        src={phoneSvg}
                        alt='phone icon'
                        height='35px'
                        width='35px'
                     />
                     <h2>05 59 20 90 50</h2>
                  </div>
               </div>
               <Slider />
            </div>
         </section>
         <div className='section2andform-container'>
            <section className='contact-section2'>
               <img
                  src={localisationJpg}
                  alt='street at night, lit by a lamppost'
                  className='contact-section2__back'
                  height='600px'
                  width='950px'
               />
               <div className='contact-section2__infos'>
                  <h3>How to find us</h3>
                  <p>
                     rem ipsum dolor sit amet, consectetur adipisicing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostru
                  </p>
                  <h2>
                     33 avenue de l{"'"}Aquitaine
                     <br />
                     64100 Bayonne
                  </h2>
               </div>
               <Suspense fallback={renderLoader()}>
                  <Map />
               </Suspense>
            </section>
            <section className='contact-form'>
               <Form />
            </section>
         </div>
      </>
   );
};

export default Contact;
