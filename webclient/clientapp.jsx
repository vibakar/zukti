import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import react from './ginniAdmin/components/menu/menu';
import AdminHome from './ginniAdmin/components/home/home';
import App1 from './ginniAdmin/components/app/app';
import adminProfile from './ginniAdmin/components/admin/adminProfile'
import ApplicationHome from './applicationHome/applicationHome';
import FrontPage from './ginniClient/components/clienthome/home';
import NewPassword from './applicationHome/newpassword';
import LoginPage from './applicationHome/loginpage';
import ForgotPassword from './applicationHome/forgotpassword.jsx';
import Signup from './applicationHome/signup';
import ClientHome from './ginniClient/components/clienthome/home';
import App from './ginniClient/components/app/app';
import LeftMenu from './ginniClient/components/leftmenu/leftmenu.jsx';
import LogoutAdmin from './ginniAdmin/components/logout/logout';
import ChangePassword from './ginniClient/components/changepassword/changepassword.jsx';
import ClientProfile from './ginniClient/components/clientprofile/clientprofile';
import Logout from './ginniClient/components/logout/logout';
import ForgetpasswordEmail from './applicationHome/forgetpasswordEmail';
import SentMailPage from './applicationHome/SentMailPage';
import ExpiryLink from './applicationHome/expiryLink';
import SuccessfullyRegistered from './applicationHome/successfullyregistered';
import AdminProfilePage from './ginniAdmin/components/admin/adminprofile';
import Cookie from 'react-cookie';


injectTapEventPlugin();
var requireAuth = function (nextState, replace) {
var token = Cookie.load('token');
console.log(token);
  if (!token) {
    console.log("Hello");
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render(
    <MuiThemeProvider>
    <Router history={hashHistory}>
        <Route path='/' component={ApplicationHome}/>
        <Route path='/adminHome' component={App1} >
          <IndexRoute component={AdminHome} onEnter={requireAuth.bind(this)} />
        </Route>
        <Route path="/clienthome" component={App} >
          <IndexRoute component={ClientHome} onEnter={requireAuth.bind(this)} />
        </Route>
        <Route path='/react' component={react} onEnter={requireAuth.bind(this)}/>
        <Route path='/newpassword' component={NewPassword}/>
        <Route path='/login' component={LoginPage} />
        <Route path='/forgotpassword' component={ForgotPassword}/>
        <Route path='/forgetmail' component={ForgetpasswordEmail}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/mail' component={SentMailPage}/>
        <Route path='/chat' component={LeftMenu} onEnter={requireAuth.bind(this)}/>
        <Route path='/left' component={LeftMenu} onEnter={requireAuth.bind(this)}/>
        <Route path='/change' component={ChangePassword}/>
        <Route path='/profile' component={ClientProfile} />
        <Route path='/adminprofile' component={AdminProfilePage} onEnter={requireAuth.bind(this)}/>
        <Route path='/logout' component={Logout} onEnter={requireAuth.bind(this)}/>
        <Route path='/log' component={LogoutAdmin} onEnter={requireAuth.bind(this)}/>
        <Route path='/expiryLink' component={ExpiryLink}/>
          <Route path='/successfullyregistered' component={SuccessfullyRegistered}/>
    </Router>
</MuiThemeProvider>, document.getElementById('mountapp'));
