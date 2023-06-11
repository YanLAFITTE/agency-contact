import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Select from '../components/Select';
import { useState } from 'react';

// import iconDown from '../assets/icon-down.png';

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

   const [value, setValue] = useState('France');

   const onSubmit = (data, e) => {
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
               e.target.reset();
               alert('Message envoyé !');
            },
            (error) => {
               console.log(error.text);
            }
         );
   };

   const towns = [
      'Hamburg',
      'Berlin',
      'Munich',
      'Amsterdam',
      'Rotterdam',
      'Mexico',
      'Rio de Janeiro',
      'Tokyo',
      'Moscou',
      'Shangai',
      'Sao Paulo',
   ];

   return (
      <div className='form-container'>
         <h2>Drop us a line</h2>
         <p>
            ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse{' '}
            <br /> lectus tortor, dignissim sit amet, adipiscing nec dolor.
         </p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-elements'>
      
               <Select selectable={towns} value={value} setValue={setValue} />
               {/* <img src={iconDown} alt='' className='icon-down' /> */}
            </div>

            <div className='form-elements'>
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
            <div className='form-elements'>
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
            <div className='form-elements'>
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
            <button type='submit' value='Send'>
               <span>Send</span>
            </button>
         </form>
      </div>
   );
};

export default Form;
