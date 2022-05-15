/* eslint-disable import/no-anonymous-default-export */
import axios from '../../configs/axios';

export default {
   register: body => axios.post('/users/register', body),
   login: token => axios.post('/users/login', token),
   refresh: body => axios.post('/refresh-tokens', { 
      refresh_token: body.refresh_token, 
      email: body.email 
   }),
   logout: () => axios.post('/users/logout'),
   detail: () => axios.get('/users'),
   update: data => axios.put('/users/update', data)
};