import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { statusOrders, fetchOrders, messageOrders } from '../store/Actions/orders';

import apiOrders from '../constans/api/orders';

import Sidebar from '../components/Dashboard/Sidebar';
import Content from '../components/Dashboard/Content';
import Congrulation from '../components/Dashboard/Content/Congrulation.js';
import { Loading } from '../components/Loading';

import NumberFormat from '../helpers/NumberFormat';
import DateFormat from '../helpers/DateFormat';
import MyClassEmpty from '../components/Dashboard/Content/MyClassEmpty';

const Transactions = () => {
   const dispatch = useDispatch();
   const ORDERS = useSelector(state => state.orders);
   const location = useLocation();
   const search = location?.search;
   const params = search.length > 0 && search
      .substring(1, search.length)
      .split('&')
      .reduce((acc, item) => {
         const [key, value] = item.split('=');
         acc[key] = value;
         return acc;
      }, {});

   console.log('order :>> ', ORDERS.data);

   useEffect(() => {
      window.scroll(0, 0);
      dispatch(statusOrders('loading'));
      apiOrders.orders().then(res => dispatch(fetchOrders(res?.data))).then(err => dispatch(messageOrders(err?.response?.data?.message)));
   }, [dispatch]);

   return (
      <>
         <Sidebar />
         <Content title="Transactions" subTitle="Keep on track what you’ve invested">
            <div className="flex flex-col mt-5">
               {ORDERS.status === 'loading' && <Loading />}
               {ORDERS.status === 'error' && ORDERS?.message}
               {ORDERS.status === 'ok' && 
                  params.order_id 
                     ? <Congrulation data={ORDERS.data[params.order_id]} /> 
                     : ORDERS.total > 0 ? 
                     <div className="overflow-x-auto">
                        <table className="table-auto w-full mb-1">
                           <tbody>
                              {
                                 Object?.values(ORDERS?.data)?.map(order => {
                                    return (
                                       <tr key={order?.id} className="hover:shadow-md transform hover:scale-[1.01] hover:rounded-xl">
                                          <td className="p-3">
                                             <div className="rounded-xl overflow-hidden w-[150px] h-[100px]">
                                                <img className="object-cover w-full h-auto" src={order?.metadata?.course_thumbnail} title={order?.metadata?.course_name} alt={order?.metadata?.course_name} />
                                             </div>
                                          </td>
                                          <td className="p-3">
                                             <div className="flex flex-col">
                                                <p className="mb-1 c-5 font-medium text-lg">{order?.metadata?.course_name}</p>
                                                <span className="c-4 text-sm">{order?.metadata?.course_level}</span>
                                             </div>
                                          </td>
                                          <td className="p-3 whitespace-nowrap text-right c-5 text-base">
                                             Rp {NumberFormat(order?.metadata?.course_price)}
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
                     </div> : <MyClassEmpty />
               }
            </div>
         </Content>
      </>
   );
};

export default Transactions;