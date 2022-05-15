/* eslint-disable import/no-anonymous-default-export */
import { POPULATE_PROFILE } from '../../constans/types/users';

const initialState = null;

export default function (state = initialState, action) {
   switch (action.type) {
      case POPULATE_PROFILE:
         return action.paylod;
      default:
         return state;
   }
}