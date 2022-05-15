/* eslint-disable import/no-anonymous-default-export */
import axios from "../../configs/axios";

export default {
  detail: (id) => axios.get(`/courses/detail/${id}`).then(res => res.data),
  join: (id) => axios.post(`/my-courses/create`, { courses_id: id }),
  mine: () => axios.get(`/my-courses`),
}
