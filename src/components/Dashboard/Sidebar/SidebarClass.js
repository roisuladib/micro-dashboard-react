import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as IconBack } from '../../../assets/images/ic-arrow-back.svg';

const SidebarClass = ({ match, data, defaultUri }) => {
   const getNavlinkClass = path => match.url === path || defaultUri === path ? 'text-white b-7 border-r-8 border-r-[#36C2CF] active' : 'c-9 font-medium';
   const list = [];
   data.chapters.map((chapter, index) => {
      list.push(<li key={`${chapter.courses_id}-${index}`}>
         <span className="nav-header relative block font-semibold text-lg px-6 py-4 c-3 text-white text-left">
            {chapter.name ?? 'Chapter Name'}
         </span>
      </li>);
      if (chapter.lessons.length >= 1) {
         chapter.lessons.map((lesson, index2) => {
            list.push(<li key={`${chapter.courses_id}-${lesson.id}-${index2}`} className="relative flex">
               <Link
                  id="coba"
                  className={["w-full px-6 py-4 hover:text-white transition-all duration-300 hover:leading-relaxed truncate ...", 
                  getNavlinkClass(`/courses/${data.id}/${chapter.id}/${lesson.video}`)].join(' ')}
                  to={`/courses/playing/${data.id}/${chapter.id}/${lesson.video}`}
               >
                  {lesson.name ?? 'Lesson Name'}
               </Link>
            </li>);
         })
      }
   });

   return (
      <aside id="sidebar" className="b-6 w-72 flex flex-col min-h-screen justify-between">
         <div className="mb-10 mt-5">
            <div>
               <ul>
                  <li className="mb-5">
                     <Link className="relative flex items-center px-6 py-4 text-white hover:c-3 transition-all duration-300" to="/my-courses">
                        <span className="h-6 w-6 items-center justify-center">
                           <IconBack />
                        </span>
                        <span className="text-base font-light hover:font-medium ml-3 link-wrapper">Back to Home</span>
                     </Link>
                  </li>
                  {list}
               </ul>
            </div>
         </div>
      </aside>
   );
};

export default withRouter(SidebarClass);