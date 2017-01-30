import React from 'react';
import { Button, Image, Modal} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import './logout.css';
export default class LogoutAdmin extends React.Component
{
  state = { open: true }
  close=()=>hashHistory.push('/react');

  logout() {
    $.ajax({
    url: 'http://localhost:8080/signout',
    type: 'GET',
    dataType:'text',
    success: function(response) {
        window.localStorage.removeItem('token');
            hashHistory.push('/');
    },
    error: function(err) {
      console.log(err);
    }
});
componentDidMount()
{
  this.logout();
}
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
            <a href="#/"><Button size="small" color='blue' onClick={this.logout.bind(this)}>Yes</Button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button size="small" color='red' onClick={this.close} >No</Button>
          </Modal.Description>
         </Modal.Content>
   </Modal>
);
}
}
