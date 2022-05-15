import React, { useEffect } from 'react';
import FormLogin from '../components/FormLogin';

const Login = () => {
  useEffect(() => {
    window.scroll(0 ,0);
  }, [])

  return (
    <div className="mx-auto max-w-screen-lg px-4 lg:max-w-screen-2xl lg:px-8 xl:max-w-screen-xl xl:px-4">
      <FormLogin />
    </div>
  )
}

export default Login;