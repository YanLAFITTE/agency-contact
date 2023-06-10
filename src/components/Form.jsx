import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import iconDown from '../assets/icon-down.png';

const Form = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
         )
         .then(
            (result) => {
               console.log(result.text);
            },
            (error) => {
               console.log(error.text);
            }
         );
   };
   return (
      <div className='form-container'>
         <h2>Drop us a line</h2>
         <p>
            ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse{' '}
            <br /> lectus tortor, dignissim sit amet, adipiscing nec dolor.
         </p>
         <form ref={form} onSubmit={sendEmail}>
            <div>
               <label htmlFor='countries'>
                  Choose your country <span className='asterix'>*</span>
               </label>
               <select name='countries' id='countries'>
                  <option value='france'>France</option>
                  <option value='england'>England</option>
                  <option value='us'>US</option>
                  <option value='brasil'>Brasil</option>
               </select>
            </div>
            <div>
               <label htmlFor='username'>
                  Name <span className='asterix'>*</span>
               </label>
               <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='John Doe'
               />
            </div>
            <div>
               <label>
                  Mail address <span className='asterix'>*</span>
               </label>
               <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='johndoe@gmail.com'
               />
            </div>
            <div data-tippy-content='Enter your message!'>
               <label>
                  Message <span className='asterix'>*</span>
               </label>
               <textarea
                  type='textarea'
                  name='message'
                  id='message'
                  placeholder='Drop us a line'
               ></textarea>
            </div>
            <button
               data-tippy-content='Send your message!'
               type='submit'
               value='Send'
            >
               <span>Send</span>
            </button>
         </form>
      </div>
   );
};

export default Form;
