import { useState } from 'react';
import PropTypes from 'prop-types';
import arrowDrop from '../assets/arrow-drop-down.svg';

const Select = ({ countries, countryValue, setCountryValue }) => {
   const [open, setOpen] = useState(false);
   const onElementClicked = (countryName) => {
      setCountryValue(countryName);
   };
   const onBtn = () => {
      if (countries.length === 0) return;
      setOpen((prevOpen) => !prevOpen);
   };
   return (
      <>
         <div className='label'>
            Choose your country <span className='asterix'>*</span>
         </div>
         <div
            className={open ? 'select border' : 'select'}
            onClick={() => onBtn()}
         >
            <div>
               <img
                  src={arrowDrop}
                  className={open ? 'rotate-arrow' : ''}
                  alt='drop-down menu icon'
                  height='15px'
                  width='15px'
               />
            </div>
            <div className='value'>{countryValue}</div>
         </div>

         {open && (
            <div className='content'>
               {countries.map((countryObj, id) => {
                  return (
                     <div
                        className='country-container'
                        key={id}
                        onClick={() => {
                           onElementClicked(countryObj.name.common);
                           onBtn();
                        }}
                     >
                        <div className='country-name'>
                           {countryObj.name.common}
                        </div>
                        <div>
                           <img
                              src={countryObj.flags.svg}
                              alt='Flag'
                              height='20px'
                           />
                        </div>
                     </div>
                  );
               })}
            </div>
         )}
      </>
   );
};

Select.propTypes = {
   countries: PropTypes.array.isRequired,
   countryValue: PropTypes.string.isRequired,
   setCountryValue: PropTypes.func.isRequired,
};

export default Select;
