import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

import iconDown from '../assets/icon-down.png';

const Form = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         username: '',
         email: '',
         message: '',
      },
   });

   const onSubmit = (data) => {
      const newData = {
         name: data.username,
         email: data.email,
         message: data.message,
         country: data.countries,
      };

      emailjs
         .send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            newData,
            import.meta.env.VITE_PUBLIC_KEY
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
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='select-container'>
               <label htmlFor='countries'>
                  Choose your country <span className='asterix'>*</span>
               </label>
               <select
                  name='countries'
                  id='countries'
                  {...register('countries', { required: true })}
               >
                  <option value='france'>France</option>
                  <option value='england'>England</option>
                  <option value='us'>US</option>
                  <option value='brasil'>Brasil</option>
               </select>
               {/* <img src={iconDown} alt='' className='icon-down' /> */}
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
                  {...register('username', {
                     required: true,
                     minLength: { value: 4, message: 'Min lenth is 4' },
                  })}
               />
               {/* {errors.username && <span>{errors.username?.message}</span>} */}
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
                  {...register('email', {
                     required: true,
                     pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  })}
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
                  {...register('message', {
                     required: 'This is required!',
                     minLength: { value: 4, message: 'Min lenth is 4' },
                  })}
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
