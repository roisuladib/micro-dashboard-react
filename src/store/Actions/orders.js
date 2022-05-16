import { STATUS_ORDERS, FETCH_ORDERS, MESSAGE_ORDERS } from '../../constans/types/orders';

export const statusOrders = status => ({
   type: STATUS_ORDERS,
   paylod: status
});

export const fetchOrders = orders => ({
   type: FETCH_ORDERS,
   paylod: orders
});

export const messageOrders = message => ({
   type: MESSAGE_ORDERS,
   paylod: message
});
