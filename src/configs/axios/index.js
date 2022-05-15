import axios from 'axios';
import errorHandler from './errorHandler';

const instance = axios.create({
   baseURL: `${process.env.REACT_APP_API_URL}`,
   timeout: process.env.TIMEOUT,
});

instance.interceptors.response.use(response => response.data, errorHandler);

export { default as setAuthorizationHeader  } from './setAuthorizationHeader';
export default instance; 