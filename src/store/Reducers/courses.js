/* eslint-disable import/no-anonymous-default-export */
import { STATUS_COURSES, FETCH_COURSES, WATCH_COURSE, MESSAGE_COURSES } from '../../constans/types/courses';

const initialState = {
   data: {},
   total: 0,
   status: 'idle',
   message: ''
};

export default function (state = initialState, action) {
   switch (action.type) {
      case STATUS_COURSES:
         return { ...state, status: action.paylod };

      case FETCH_COURSES:
         return {
            ...state,
            data: action.paylod?.reduce?.((acc, item) => {
               acc[item.courses_id] = item;
               return acc;
            }, {}),
            total: action.paylod?.length ?? 0,
            status: 'ok'
         };

      case WATCH_COURSE:
         return {
            ...state,
            data: {
               ...state.data,
               [action.paylod.id]: {
                  ...state.data[action.paylod.id],
                  ...action.paylod
               }
            },
            status: 'ok'
         }

      case MESSAGE_COURSES:
         return {
            ...state,
            message: action.paylod,
            status: 'error'
         }

      default:
         return state;
   }
}