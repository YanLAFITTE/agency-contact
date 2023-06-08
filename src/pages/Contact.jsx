import phoneSvg from  '../assets/phone.svg'

const Contact = () => {
   return (
      <section className='contact-section1'>
         <div className='contact-section1__container'>
            <div className='contact-section1__infos'>
               <h2 >How to contact us</h2>
               <p >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate, similique voluptate. Ex delectus incidunt debitis
                  at deserunt possimus nisi itaque.
               </p>
               <div className='contact-section1__phone'>
                  <img
                     src={phoneSvg}
                     alt=''
                     height='35px'
                     width='35px'
                  />
                  <h3>05 59 20 90 50</h3>
               </div>
            </div>
            <div className='contact-section1__slider'></div>
         </div>
      </section>
   );
};

export default Contact;