import React from 'react';
import { Button, Image, Modal} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import './logout.css';
import $ from 'jquery';
import Cookie from 'react-cookie';
export default class LogoutAdmin extends React.Component
{
  state = { open: true }
  close=()=>hashHistory.push('/react');

  handleLogout()
{
console.log("logout")
$.ajax({
      type: 'GET',
      url:"http://localhost:8080/signout",
      dataType: 'json',
      success: function(res) {
       Cookie.remove('authType');
       Cookie.remove('token');
       hashHistory.push('/');
      }.bind(this),
      error: function(err){
        console.log("error",err);
      }.bind(this)
   });
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
