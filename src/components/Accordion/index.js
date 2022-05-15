import { useState } from 'react';

export { default as Card } from './Card';
export { default as IconPlay } from '/public/images/ic-play.svg';
export { default as IconLock } from '/public/images/ic-lock.svg';

const Accordion = ({ children }) => {
   const [active, setActive] = useState(null);
   const toggle = id => setActive(prev => prev === id ? null : id);

   return (
      <div className="accordion">
         {children(active, toggle)}
      </div>
   );
}

export default Accordion;