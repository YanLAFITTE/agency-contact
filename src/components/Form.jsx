import { useEffect, useState, lazy } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Select = lazy(() => import('../components/Select'));

const Form = () => {
   const [countryValue, setCountryValue] = useState('France');
   const [countries, setCountries] = useState([]);

   const sortCountries = (countries) => {
      countries.sort(function (a, b) {
         if (a.name.common < b.name.common) {
            return -1;
         }
         if (a.name.common > b.name) {
            return 1;
         }
         return 0;
      });
   };

   sortCountries(countries);

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
            Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
         </p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-elements'>
               <Select
                  countries={countries}
                  countryValue={countryValue}
                  setCountryValue={setCountryValue}
                  register={register}
               />
            </div>

            <div className='form-elements'>
               <label htmlFor='username'>
                  Name <span className='asterix'>*</span>
               </label>
               <Tippy content='Fill with your name' className='tippy'>
                  <input
                     type='text'
                     name='username'
                     id='username'
                     placeholder='John Doe'
                     {...register('username', {
                        required: true,
                        minLength: { value: 4, message: 'Min lenth is 4' },
                        maxLength: 20,
                     })}
                  />
               </Tippy>
               {/* {errors.username && <span>{errors.username?.message}</span>} */}
            </div>
            <div className='form-elements'>
               <label htmlFor='email'>
                  Mail address <span className='asterix'>*</span>
               </label>
               <Tippy content='Fill with your email' className='tippy'>
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
               <label htmlFor='message'>
                  Message <span className='asterix'>*</span>
               </label>
               <Tippy content='Fill with your message' className='tippy'>
                  <textarea
                     type='textarea'
                     name='message'
                     id='message'
                     placeholder='Drop us a line'
                     {...register('message', {
                        required: true,
                        minLength: { value: 4, message: 'Min lenth is 4' },
                        maxLength: 400,
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
