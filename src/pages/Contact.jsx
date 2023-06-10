import phoneSvg from '../assets/phone.svg';
import Slider from '../components/Slider';
import localisationJpg from '../assets/localisation.jpg';
import Map from '../components/Map';
import Form from '../components/Form';

const Contact = () => {
   return (
      <>
         <section className='contact-section1'>
            <div className='contact-section1__container'>
               <div className='contact-section1__infos'>
                  <h2>How to contact us</h2>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Cupiditate, similique voluptate. Ex delectus incidunt
                     debitis at deserunt possimus nisi itaque.
                  </p>
                  <div className='contact-section1__phone'>
                     <img src={phoneSvg} alt='' height='35px' width='35px' />
                     <h3>05 59 20 90 50</h3>
                  </div>
               </div>
               <Slider />
            </div>
         </section>
         <div className='section2andform-container'>
            <section className='contact-section2'>
               <img
                  src={localisationJpg}
                  alt='rue de nuit, eclairée par un lampadaire'
                  className='contact-section2__back'
               />
               <div className='contact-section2__infos'>
                  <h2>How to find us</h2>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Animi ut sunt unde eveniet saepe vitae enim obcaecati,
                     nihil hic corrupti?
                  </p>
                  <h3>
                     33 avenue de l'Aquitaine
                     <br />
                     64100 Bayonne
                  </h3>
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
