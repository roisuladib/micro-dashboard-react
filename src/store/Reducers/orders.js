/* eslint-disable import/no-anonymous-default-export */
import { STATUS_ORDERS, FETCH_ORDERS, MESSAGE_ORDERS } from '../../constans/types/orders';

const initialState = {
   data: {},
   total: 0,
   status: 'idle',
   message: ''
};

export default function (state = initialState, action) {
   switch (action.type) {
      case STATUS_ORDERS:
         return { ...state, status: action.paylod };

      case FETCH_ORDERS:
         return {
            ...state,
            data: action.paylod?.reduce?.((acc, item) => {
               acc[item.id] = item;
               return acc;
            }, {}),
            total: action.paylod?.length ?? 0,
            status: 'ok'
         };

      case MESSAGE_ORDERS:
         return {
            ...state,
            message: action.paylod,
            status: 'error'
         }

      default:
         return state;
   }
}