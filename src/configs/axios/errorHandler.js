import {toast} from 'react-toastify';
import handlerUser from '../../constans/api/users';
import axios, { setAuthorizationHeader } from './';
 
const errorHandler = error => {
   if (error) {
      let message;
      if (error.response) {
        const originalRequest = error.config;
        if (error.response.status === 500) message = "Something went terribly wrong";
        else if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;
          const session = localStorage['ADIBMICRO:token'] ? JSON.parse(localStorage['ADIBMICRO:token']) : null;
          return handlerUser.refresh({ refresh_token: session.refresh_token, email: session.email }).then(res => {
            if (res.data) {
              setAuthorizationHeader(res.data.token);
              localStorage.setItem('ADIBMICRO:token', JSON.stringify({
                ...session, 
                token: res.data.token
              }));
              originalRequest.headers.authorization = res.data.token;
              return axios(originalRequest);
            } else {
              window.location.href = '/login';
              localStorage.removeItem('ADIBMICRO:token');
            }
          });
        }
        else message = error.response.data.message;
  
        if (typeof message === "string") toast.error(message);
        return Promise.reject(error);
      }
    }
};

export default errorHandler;
