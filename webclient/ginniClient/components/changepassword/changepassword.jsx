import React from 'react'
import { Button, Header, Icon, Modal,Form} from 'semantic-ui-react';
import {Router, Route, hashHistory} from 'react-router';
import axios from 'axios';
import './changepassword.css';
var emailId;
export default class ChangePassword extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:''
    }
    this.passwordchange=this.passwordchange.bind(this);
  }
  state = { open: true }
  show = (trigger) => () => this.setState({ dimmer, open: true })

 handleOpen = (e) => this.setState({
    modalOpen: true,
  })

 close = () => hashHistory.push ('/left');
passwordchange(e,value){
  alert(value.formData.password);
  alert(this.props.location.query.email)
  var self=this;
  e.preventDefault();
  axios({
      url: ' http://localhost:8080/resetpassword',
      method: 'put',
      data: {
          email: self.state.email,
          password: value.formData.password
        }
      }).
      then(function(msg) {
        console.log(msg);
          hashHistory.push('/');
      }).
      catch(function(err) {
          alert('check the details');
      })

}
  render() {
    emailId=this.props.email;
    const { open, trigger,closeOnRootNodeClick } = this.state
    return (
      <Modal
      trigger={trigger}
      open={open} onClose={this.close}
      closeOnRootNodeClick={false}
      size='small' closeIcon="close"
      >
      <Modal.Header id="headerchange"><h1>Reset Password</h1></Modal.Header>
      <Modal.Content>
      <Form onSubmit={this.passwordchange.bind(this)}>
      <Form.Field width={8} id='forminput'>
      <Input placeholder='new password' icon='lock' iconPosition='left'/>
    </Form.Field>
      <Form.Field width={8} id='forminput'>
      <Input type='password' placeholder='confirm password' icon='lock' iconPosition='left'/>
      </Form.Field><br/>
      <Form.Field>
      <a href ="#/left">
      <Button color='red' onClick={this.handleClose} inverted id='cancelbutton'>
      <Icon name='cancel'/> Cancel
      </Button>
      <Button color='green' type='submit' onClick={this.handleClose} inverted id='resetbutton'>
      <Icon name='checkmark' /> Reset
      </Button></a>
      </Form.Field>
      </Form></Modal.Content>
      </Modal>
      )
}
}
