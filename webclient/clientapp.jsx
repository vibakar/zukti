import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import react from './ginniAdmin/components/menu/menu';
import AdminHome from './ginniAdmin/components/home/home';
import adminProfile from './ginniAdmin/components/admin/adminProfile'
import MenuItem from './ginniClient/components/rightBar/menuitem';
import Carousel from './applicationHome/carousel';
import FrontPage from './ginniClient/components/clienthome/home';
import NewPassword from './applicationHome/newpassword';
import LoginPage from './applicationHome/loginpage';
import ForgotPassword from './applicationHome/forgotpassword.jsx';
import Signup from './applicationHome/signup';
import HomeClient from './ginniClient/components/clienthome/home';
import LeftMenu from './ginniClient/components/leftmenu/leftmenu.jsx';


injectTapEventPlugin();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={AdminHome}/>
        <Route path='/' component={FrontPage}/>
        <Route path='/react' component={react}/>
        <Route path='/a' component={Carousel}/>
        <Route path='/newpassword' component={NewPassword}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/forgotpassword' component={ForgotPassword}/>
          <Route path='/signup' component={Signup}/>
            <Route path='/homeclient' component={HomeClient}/>
            <Route path='/left' component={LeftMenu}/>



      </Router>
,document.getElementById('mountapp')
 );
