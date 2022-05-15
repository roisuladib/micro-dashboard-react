import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';
import Content from '../components/Dashboard/Content';
import apiOrders from '../constans/api/orders';
import NumberFormat from '../helpers/NumberFormat';
import DateFormat from '../helpers/DateFormat';

const Transactions = () => {
   const [orders, setOrders] = useState([]);
   useEffect(() => {
      window.scroll(0, 0);
      apiOrders.orders().then(res => setOrders(res)).then(err => console.log(err.response.data.message));
   }, []);

   return (
      <>
         <Sidebar />
         <Content title="Transactions" subTitle="Keep on track what you’ve invested">
            <div className="flex flex-col mt-5">
               <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                     <tbody>
                        {
                           orders.map(order => {
                              return (
                                 <tr key={order.id} className="hover:shadow-md transform hover:scale-[1.01] hover:rounded-xl">
                                    <td className="p-3">
                                       <div className="rounded-xl overflow-hidden w-[150px] h-[100px]">
                                          <img className="object-cover w-full h-auto" src={order.metadata.course_thumbnail} title={order.metadata.course_name} alt={order.metadata.course_name} />
                                       </div>
                                    </td>
                                    <td className="p-3">
                                       <div className="flex flex-col">
                                          <p className="mb-1 c-5 font-medium text-lg">{order.metadata.course_name}</p>
                                          <span className="c-4 text-sm">{order.metadata.course_level}</span>
                                       </div>
                                    </td>
                                    <td className="p-3 whitespace-nowrap text-right c-5 text-base">
                                       Rp {NumberFormat(order.metadata.course_price)}
                                    </td>
                                    <td className="p-3 whitespace-nowrap text-right c-5 text-base">
                                       {DateFormat(order.created_at.split(' ').shift())}
                                    </td>
                                    <td className="p-3">
                                       <div className="flex w-full justify-end">
                                          <Link to={`/courses/playing/${order.metadata.course_id}`} className="rounded-xl text-center py-2 px-9 text-base bg-[#EDEDED] hover:bg-[#e2e2e2] text-[#ACACAC] transition-all duration-500">
                                             Lihat
                                          </Link>
                                       </div>
                                    </td>
                                 </tr>
                              )
                           })
                        }
                     </tbody>
                  </table>
               </div>
            </div>
         </Content>
      </>
   );
};

export default Transactions;