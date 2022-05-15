/* eslint-disable import/no-anonymous-default-export */
import axios from "../../configs/axios";

export default {
  orders: () => axios.get('/orders').then(res => res.data),
}
