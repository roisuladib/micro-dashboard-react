import propTypes from 'prop-types';
import IconStar from '/public/images/ic-star.svg';

const Star = ({ className, value, height, width }) => {
   const star = [];
   let lefPos = 0;
   for (let index = 0; index < 5 && index < value; index++) {
      lefPos = lefPos + width;
      star.push(<div className="star" key={`${index}`} style={{ left: index * width, height: height, width: width }} />)
   }

   let starPlaceholder = [];
   for (let index = 0; index < 5; index++) {
      starPlaceholder.push(<div className="star placeholder" key={`${index}`} style={{ left: index * width, height: height, width: width }} />)
   }

   return (
      <>
         <div className={["stars", className].join(' ')} style={{ height: height }}>
            {starPlaceholder}
            {star}
         </div>
         <IconStar />
      </>
   );
}

Star.propTypes = {
   className: propTypes.string,
   value: propTypes.number,
   width: propTypes.number,
   height: propTypes.number,
}

export default Star;