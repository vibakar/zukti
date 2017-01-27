import React from 'react';
import { Button, Image, Modal} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import Axios from 'axios';
import './logout.css';
export default class LogoutAdmin extends React.Component
{
  state = { open: true }
  close=()=>hashHistory.push('/react');

  logout() {
    Axios({
    url: 'http://localhost:8080/signout',
    method: 'GET',
  }).then(function(response) {
        window.localStorage.removeItem('token');
            hashHistory.push('/');
    }).catch(function(err) {

      console.log(err);
    })
};
componentDidMount()
{
  this.logout();
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

      <Button size="small" color='blue' onClick={this.logout.bind(this)}>Yes</Button>&nbsp;&nbsp;&nbsp;&nbsp;
  <Button size="small" color='red' onClick={this.close} >No</Button>
      </Modal.Description>
      </Modal.Content>
      </Modal>
      );
  }
}
