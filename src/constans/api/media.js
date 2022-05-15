/* eslint-disable import/no-anonymous-default-export */
import axios from "../../configs/axios";

export default {
  upload : image => axios.post('/media/upload', { image }),
  destroy: id => axios.delete(`/media/delete/${id}`)
}