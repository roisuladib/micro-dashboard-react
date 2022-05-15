import React from 'react';
import propTypes from 'prop-types';

const Input = ({ error, name, type, onMyChange, value, placeholder, labelName, labelClasName, inputClasName }) => {
  return (
   <div className="mb-4">
      <label 
         htmlFor={name} 
         className={[
            "font-normal text-lg" 
            , error 
            ? 'text-[#FF3434]' 
            : 'c-5'
            , labelClasName
         ].join(' ')}>
         {labelName}
      </label>
      <input 
         type={type}
         name={name}
         onChange={onMyChange} 
         value={value} 
         autoFocus
         placeholder={placeholder ?? ''}
         className={[
            "text-lg mt-2 w-full focus:outline-none focus:border-2 border py-3 px-4 border-grey-light rounded-xl"
            , error
            ? 'border-[#FF3434] text-[#FF3434]' 
            : 'focus:border-[#fe721c] border-[#7186A0]'
            , inputClasName
         ].join(' ')} 
      />
      <span className="text-[#FF3434] pt-2">{error}</span>
   </div>
  );
};

Input.propTypes = {
   error: propTypes.string, 
   name: propTypes.string.isRequired, 
   type: propTypes.oneOf('text', 'email', 'password', 'search', 'tel', 'sumbit', 'button', 'file', 'date', 'checkbox', 'radio'),
   onMyChange: propTypes.func.isRequired, 
   value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
   placeholder: propTypes.string, 
   labelName: propTypes.string, 
   labelClasName: propTypes.string, 
   inputClasName: propTypes.string
}

export default Input