import { useState } from 'react';
import IconDown from '/public/images/ic-down.svg';
import { CSSTransition } from 'react-transition-group';

const Card = ({ id, name, child, active, toggle, children }) => {
   const [height, setHeight] = useState(0);
   const calcHeight = e => setHeight(e.offsetHeight);

   return (
      <div className="bg-white border border-[#DBDBDB] overflow-hidden">
         <div className="accordion-meta relative flex justify-between items-center pl-4 py-2">
            <span className="c-4">{name}</span>
            <button onClick={() => toggle(id)} className="link-wrapper pr-4 focus:outline-none">
               {child && child.length > 0 && <IconDown className={['transition-all duration-300 transform', active === id ? "rotate-180" : "rotate-0"].join(' ')} />}
            </button>
         </div>
         <div className="transition-all duration-500" style={{ height: active === id ? height: 0}}>
            <CSSTransition in={active === id} timeout={500} onEnter={calcHeight } classNames="accordion-item">
               <div className="accordion-item bg-[#F6F6F6]">
                  {children}
               </div>
            </CSSTransition>
         </div>
      </div>
   );
}

export default Card;