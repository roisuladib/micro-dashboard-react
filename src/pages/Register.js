import React, { useEffect } from 'react';
import FormRegister from '../components/FormRegister';

const Register = ({ history }) => {
  useEffect(() => {
    window.scroll(0 ,0);
  }, [])
  

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-10 lg:max-w-screen-2xl lg:px-8 xl:max-w-screen-xl xl:px-4">
      <FormRegister />
    </div>
  )
}

export default Register;