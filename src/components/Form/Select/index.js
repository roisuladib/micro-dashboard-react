import React, { Children, useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';

const Select = ({ label, id, name, value, className, children, onClick, placeholder }) => {
   const [toggle, setToggle] = useState(false);
   const selectWrapper = useRef(null);
   const items = Children.toArray(children);
   const toggleSelect = () => setToggle(!toggle);
   const clickOutSide = e => {
     if (selectWrapper && !selectWrapper?.current?.contains(e.target))
     setToggle(false);
   }
   useEffect(() => {
     window.addEventListener('mousedown', clickOutSide);
     return () => window.addEventListener('mousedown', clickOutSide);
   }, []);
   const selected = items.find(item => item.props.value === value);

   return (
      <div className="mb-4">
        <div className="flex flex-col">
        {
          label && 
          <label htmlFor="" className="show font-normal text-lg c-5">
            {label}
          </label>
        }
            <div className="relative mt-2" ref={selectWrapper} onClick={toggleSelect}>
              <div className={['flex justify-between items-center cursor-pointer bg-white focus:outline-none transition-all duration-200 px-4 py-3 rounded-xl w-full border', toggle ? 'border-teal-500' : 'border-gray-600', className].join(' ')}>
                <span className={value === '' ? 'text-gray-500' : ''}>
                  {selected?.props.children ?? placeholder}
                </span>
                <div className={['transition-all duration-200 border-gray-200 border-b-2 border-r-2 w-2 h-2 transform', toggle ? 'rotate-[225deg]' : 'rotate-45'].join(' ')} />
              </div>
              <div className={['mt-2 rounded-xl shadow-xl z-10 absolute left-0 bg-white border border-gray-600 py-3 w-full', toggle ? '' : 'hidden'].join(' ')}>
              {
                items?.map((item, index) => {
                  return <div key={index} onClick={() => onClick({ target: { name: name, value: item.props.value } })} className="cursor-pointer px-4 py-1 bg-white hover:bg-gray-400 transition-all duration-200">
                    {
                      item.props.children
                    }
                  </div>
                })
              }
              </div>
            </div>
        </div>
      </div>
   )
}

Select.propTypes = {
   label: propTypes.string,
   id: propTypes.string,
   name: propTypes.string.isRequired,
   value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
   className: propTypes.string,
   onClick: propTypes.func.isRequired,
   placeholder: propTypes.string
}

export default Select;
