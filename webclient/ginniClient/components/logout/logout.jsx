import React from 'react';
import { Button, Image, Modal} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import './logout.css';
import Axios from 'axios';
import Cookie from 'react-cookie';
export default class Logout extends React.Component
{
  state = { open: true }
  close=()=>hashHistory.push('/chat');
  handleLogout()
{
console.log("logout")
Axios({
        method: 'GET',
        url: 'http://localhost:8080/signout',
        data: 'json'
      }).then(function (response) {
        Cookie.remove("authType");
        Cookie.remove("token");
        hashHistory.push('/');
      })
       .catch(function (error) {
       });
           console.log("error",err);
 }
  render() {
    const { open} = this.state;
    return(
  <Modal open={open} onClose={this.close} closeOnRootNodeClick={false} size='small' basic >
         <Modal.Header id="logoutheader" >
            <Image src='../../images/logout.gif' size='tiny' avatar/>
             Are You Sure?You want to Logout?
          </Modal.Header>
          <Modal.Content>
          <Modal.Description id="logoutdescription">
            <a href="#/"><Button size="small" color='blue' onClick={this.handleLogout.bind(this)}>Yes</Button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button size="small" color='red' onClick={this.close} >No</Button>
          </Modal.Description>
         </Modal.Content>
   </Modal>
);
}
}
