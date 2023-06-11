import { useState } from 'react';
import down from '../assets/arrow-drop-down.svg';

const Select = ({ countries, countryValue, setCountryValue }) => {
   const [open, setOpen] = useState(false);
   const onElementClicked = (countryName) => {
      setCountryValue(countryName);
   };
   const onBtn = () => {
      setOpen((prevOpen) => !prevOpen);
   };
   return (
      <>
         <label htmlFor='countries'>
            Choose your country <span className='asterix'>*</span>
         </label>

         <div
            className={open ? 'select border' : 'select'}
            onClick={() => onBtn()}
         >
            <div>
               <img src={down} className={open ? 'rotate-arrow' : ''} />
            </div>
            <div className='value'>{countryValue}</div>
         </div>

         {open && (
            <div className='content'>
               {countries.length &&
                  countries.map((countryObj, id) => {
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
                                 src={countryObj.flags?.svg}
                                 alt='arrow down'
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

export default Select;
