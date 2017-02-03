import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import react from './ginniAdmin/components/menu/menu';
import AdminHome from './ginniAdmin/components/home/home';
import adminProfile from './ginniAdmin/components/admin/adminProfile'
import ApplicationHome from './applicationHome/applicationHome';
import FrontPage from './ginniClient/components/clienthome/home';
import NewPassword from './applicationHome/newpassword';
import LoginPage from './applicationHome/loginpage';
import ForgotPassword from './applicationHome/forgotpassword.jsx';
import Signup from './applicationHome/signup';
import HomeClient from './ginniClient/components/clienthome/home';
import LeftMenu from './ginniClient/components/leftmenu/leftmenu.jsx';
import LogoutAdmin from './ginniAdmin/components/logout/logout';
import ChangePassword from './ginniClient/components/changepassword/changepassword.jsx';
import ClientProfile from './ginniClient/components/clientprofile/clientprofile';
import Logout from './ginniClient/components/logout/logout';
import ForgetpasswordEmail from './applicationHome/forgetpasswordEmail';
import SentMailPage from './applicationHome/SentMailPage';
import ExpiryLink from './applicationHome/expiryLink';
import AdminProfilePage from './ginniAdmin/components/admin/adminprofile';
import Addnode from './ginniAdmin/components/buildNodeAndRelationship/createNodeAndRelation.jsx';


injectTapEventPlugin();
function loggedIn() {
    if (window.localStorage.getItem('token')) {
        return true;
        console.log("authenticated");
    }
    return false;
}
function requireAuth(nextState, replace) {
    //  console.log("--------------")
    if (!loggedIn()) {
        replace({pathname: '/'});
    }
}

ReactDOM.render(
    <MuiThemeProvider>
    <Router history={hashHistory}>
        <Route path='/' component={ApplicationHome}/>
        <Route path='/adminHome' component={AdminHome} />
        <Route path='/clienthome' component={HomeClient} />
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
        <Route path='/profile' component={ClientProfile} onEnter={requireAuth.bind(this)}/>
        <Route path='/adminprofile' component={AdminProfilePage} onEnter={requireAuth.bind(this)}/>
        <Route path='/logout' component={Logout} onEnter={requireAuth.bind(this)}/>
        <Route path='/log' component={LogoutAdmin} onEnter={requireAuth.bind(this)}/>
        <Route path='/expiryLink' component={ExpiryLink}/>
        <Route path='/addnode' component={Addnode}/>


    </Router>
</MuiThemeProvider>, document.getElementById('mountapp'));
