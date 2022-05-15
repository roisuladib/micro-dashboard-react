import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useDispatch } from 'react-redux';
import { setAuthorizationHeader } from './configs/axios';
import { populateProfile } from './store/Actions/users';
import { ToastContainer } from 'react-toastify';

import handlerUser from './constans/api/users';

import GuestRoute from './routes/GuestRoute';
import MemberRoute from './routes/MemberRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import Custom404 from './pages/404';
import MyClass from './pages/MyClass';
import Joined from './pages/Joined';
import DetailClass from './pages/DetailClass.js';
import Unauthenticated from './pages/401';
import Transactions from './pages/Transactions.js';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';

import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  const dispatch = useDispatch();
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  useEffect(() => {
    let session = null;
    if (localStorage.getItem('ADIBMICRO:token')) {
      session = JSON.parse(localStorage.getItem('ADIBMICRO:token'));
      setAuthorizationHeader(session.token);
      handlerUser.detail().then(res => dispatch(populateProfile(res.data))).catch(err => console.log('Error Detail User : ', err)); 
    }
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <GuestRoute path="/private" component={Unauthenticated} />
          <MemberRoute exact path="/" component={Dashboard} />
          <MemberRoute path="/my-courses" component={MyClass} />
          <MemberRoute path="/joined/:class" component={Joined} />
          <MemberRoute path="/courses/playing/:class/:chapter/:uid" component={DetailClass} />
          <MemberRoute path="/courses/playing/:class/" component={DetailClass} />
          <MemberRoute path="/transactions" component={Transactions} />
          <MemberRoute path="/settings" component={Settings} />
          <Route path="/*" component={Custom404} />
        </Switch>
      </Router>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
