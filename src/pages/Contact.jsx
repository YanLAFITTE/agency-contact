import phoneSvg from '../assets/phone.svg';
import localisationJpg from '../assets/images/localisation.jpg';
import localisation330 from '../assets/images/responsive/localisation-330w.webp';
import localisation768 from '../assets/images/responsive/localisation-768w.webp';

import Slider from '../components/Slider';
import Map from '../components/Map';
import Form from '../components/Form';

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
                  height='467px'
                  width='700px'
                  srcSet={`${localisation330} 330w, ${localisation768} 768w`}
                  sizes='(max-width: 700px) 10vw, 100vw'
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
               <Map />
            </section>
            <section className='contact-form'>
               <Form />
            </section>
         </div>
      </>
   );
};

export default Contact;
