import PropTypes from 'prop-types';

const SuccessForm = ({ setOpenSuccess }) => {
   return (
      <div className='success-container'>
         <div>
            <p>Message sent successfully</p>
            <button onClick={() => setOpenSuccess(false)}>
               <span>Close</span>
            </button>
         </div>
      </div>
   );
};

export default SuccessForm;

SuccessForm.propTypes = {
   setOpenSuccess: PropTypes.func.isRequired,
};
