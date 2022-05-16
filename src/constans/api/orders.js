/* eslint-disable import/no-anonymous-default-export */
import axios from "../../configs/axios";

export default {
  orders: (options = { params: {} }) => axios.get('/orders', options)
}
