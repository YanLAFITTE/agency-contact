import { useState } from 'react';
import down from '../assets/arrow-drop-down.svg';

const Select = ({ selectable, value, setValue }) => {
   const [open, setOpen] = useState(false);
   const onElementClicked = (town) => {
      setValue(town);
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
            <div className='value'>{value}</div>
         </div>
         {open && (
            <div className='content'>
               {selectable.length &&
                  selectable.map((town) => {
                     return (
                        <div
                           key={town}
                           onClick={() => {
                              onElementClicked(town);
                              onBtn();
                           }}
                        >
                           {town}
                        </div>
                     );
                  })}
            </div>
         )}
      </>
   );
};

export default Select;
