import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const MemberRoute = ({ component: Component, match, path, location, ...rest }) => {
  const token = localStorage.getItem('ADIBMICRO:token');
  localStorage.removeItem('ADIBMICRO:redirect');
  // console.log('Member: => ', ...rest);
  
  return <Route 
    { ...rest } 
    render={ 
      props => token 
      ? <Component { ...props } /> 
      : path === '/joined/:class' 
      ? <Redirect to={`/login?path=${location.pathname}`} /> 
      : <Redirect to={`/private?path=${location.pathname}`} /> 
    } 
  />
};

export default withRouter(MemberRoute);