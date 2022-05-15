import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Content from '../components/Dashboard/Content';
import Sidebar from '../components/Dashboard/Sidebar';
import FormSetting from '../components/Form/FormSetting';

const Settings = () => {
   useEffect(() => {
      window.scroll(0, 0);
   }, []);
   const USERS = useSelector(state => state.users);

   return (
      <>
         <Sidebar />
         <Content title="Settings" subTitle="Secure your data informations">
            <FormSetting settings={USERS} />
         </Content>
      </>
   );
};

export default Settings;