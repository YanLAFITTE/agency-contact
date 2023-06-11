import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Select from '../components/Select';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Form = () => {
   const [countryValue, setCountryValue] = useState('France');
   const [countries, setCountries] = useState([]);

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

   const onSubmit = (data, e) => {
      const newData = {
         name: data.username,
         email: data.email,
         message: data.message,
         country: countryValue,
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
               setCountryValue('France');
            },
            (error) => {
               console.log(error.text);
            }
         );
   };

   useEffect(() => {
      const getCountries = async () => {
         try {
            const res = await fetch(
               'https://restcountries.com/v3.1/all?fields=name,flags'
            );
            const data = await res.json();
            setCountries(data);
         } catch (error) {
            console.log(error);
         }
      };

      getCountries();
   }, []);

   return (
      <div className='form-container'>
         <h2>Drop us a line</h2>
         <p>
            ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse{' '}
            <br /> lectus tortor, dignissim sit amet, adipiscing nec dolor.
         </p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-elements'>
               <Select
                  countries={countries}
                  countryValue={countryValue}
                  setCountryValue={setCountryValue}
               />
               {/* <img src={iconDown} alt='' className='icon-down' /> */}
            </div>

            <div className='form-elements'>
               <label htmlFor='username'>
                  Name <span className='asterix'>*</span>
               </label>
               <Tippy content='Fill with your name'>
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
               </Tippy>
               {/* {errors.username && <span>{errors.username?.message}</span>} */}
            </div>
            <div className='form-elements'>
               <label>
                  Mail address <span className='asterix'>*</span>
               </label>
               <Tippy content='Fill with your email'>
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
               </Tippy>
            </div>
            <div className='form-elements'>
               <label>
                  Message <span className='asterix'>*</span>
               </label>
               <Tippy content='Fill with your message'>
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
               </Tippy>
            </div>
            <button type='submit' value='Send'>
               <span>Send</span>
            </button>
         </form>
      </div>
   );
};

export default Form;
