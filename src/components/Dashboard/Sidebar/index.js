import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import handlerUsers from '../../../constans/api/users';
import { ReactComponent as IconSet } from '../../../assets/images/ic-set.svg';
import { ReactComponent as IconLogOut } from '../../../assets/images/ic-logout.svg';
import { ReactComponent as IconTrans } from '../../../assets/images/ic-trans.svg';
import { ReactComponent as IconLib } from '../../../assets/images/ic-library.svg';
import { ReactComponent as IconMyClass } from '../../../assets/images/ic-myclass.svg';
import { ReactComponent as IconAvatar } from '../../../assets/images/ic-default-avatar.svg';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Sidebar = ({ history, match }) => {
   const getNavlinkClass = path => match.path === path ? 'text-white b-7 border-r-8 border-r-[#36C2CF] active' : 'c-9';
   const USERS = useSelector(state => state.users);
   const logout = () => {
      handlerUsers.logout().then(res => {
         toast.success(res.message);
         localStorage.removeItem('ADIBMICRO:token');
         history.push('/login');
      }).catch(err => console.log(err));
   }

   const confirmLogout = () => {
      confirmAlert({
         title: 'Confirm to logout',
         buttons: [
            {
               label: 'Yes',
               onClick: logout
            },
            {
               label: 'No',
            }
         ]
      });
   };

   return (
      <aside id="sidebar" className="b-6 -ml-[100%] fixed z-10 top-0 pb-3 w-full flex flex-col justify-between h-screen transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
         <div>
            <Link to={'/'} className="flex flex-col items-center mt-12 mb-10">
               <div className="flex justify-center items-center rounded-full relative cursor-pointer transition-all duration-150 delay-100 hover:animate-pulse">
                  <span className="block b-6 border-2 border-[#7176B8] p-[10px] rounded-full">
                     {
                        USERS?.avatar ?
                           <div className="rounded-full w-20 h-20 overflow-hidden">
                              <img
                                 className="w-20 h-full object-cover"
                                 src={USERS?.avatar}
                                 alt={USERS?.name}
                                 title={USERS?.name}
                              />
                           </div>
                           : <IconAvatar className="w-20 h-20 rounded-full" />
                     }
                  </span>
               </div>
               <span className="text-white font-medium text-xl mt-4 mb-1 px-4">
                  {
                     USERS?.name ? USERS?.name : 'Nama Student'
                  }
               </span>
               <span className="text-[#7176B8] font-light text-sm px-4">
                  {
                     USERS?.profession ? USERS?.profession : 'Profession'
                  }
               </span>
            </Link>
            <ul className="space-y-2 tracking-wide">
               <li>
                  <Link className={["flex flex-row items-center px-6 py-4 hover:text-white transition-all duration-300", getNavlinkClass('/')].join(' ')} to="/">
                     <span className="h-6 w-6 items-center justify-center">
                        <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                           <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                           <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                           <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                        </svg>
                     </span>
                     <span className="text-base font-light ml-3">Enhancement</span>
                  </Link>
               </li>
               <li>
                  <Link className={["flex flex-row items-center px-6 py-4 hover:text-white transition-all duration-300", getNavlinkClass('/my-courses')].join(' ')} to="/my-courses">
                     <span className="h-6 w-6 items-center justify-center">
                        <IconMyClass />
                     </span>
                     <span className="text-base font-light ml-3">My Courses</span>
                  </Link>
               </li>
               <li>
                  <a
                     href={`${process.env.REACT_APP_FRONTPAGE_URL}/classes`}
                     rel="noopener noreferrer"
                     target="_blank"
                     className="flex flex-row items-center px-6 py-4 c-9 hover:text-white transition-all duration-300"
                  >
                     <span className="h-6 w-6 items-center justify-center">
                        <IconLib />
                     </span>
                     <span className="text-base font-light ml-3">Libraries</span>
                  </a>
               </li>
               <li>
                  <Link className={["flex flex-row items-center px-6 py-4 hover:text-white transition-all duration-300", getNavlinkClass('/transactions')].join(' ')} to="/transactions">
                     <span className="h-6 w-6 items-center justify-center">
                        <IconTrans />
                     </span>
                     <span className="text-base font-light ml-3">Transactions</span>
                  </Link>
               </li>
               <li>
                  <Link className={["flex flex-row items-center px-6 py-4 hover:text-white transition-all duration-300", getNavlinkClass('/settings')].join(' ')} to="/settings">
                     <span className="h-6 w-6 items-center justify-center">
                        <IconSet />
                     </span>
                     <span className="text-base font-light ml-3">Setings</span>
                  </Link>
               </li>
            </ul>
         </div>
         <div>
            <button onClick={confirmLogout} className="flex flex-row items-center px-6 py-4 c-9 hover:text-white transition-all duration-300 w-full">
               <span className="h-6 w-6 items-center justify-center">
                  <IconLogOut />
               </span>
               <span className="text-base font-light ml-3">Log Out</span>
            </button>
         </div>
      </aside>
   );
};

export default withRouter(Sidebar);