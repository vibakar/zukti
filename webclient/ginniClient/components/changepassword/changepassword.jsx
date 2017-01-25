import React from 'react'
import { Button, Header, Icon, Modal,Form} from 'semantic-ui-react';
import {Router, Route, hashHistory} from 'react-router';
import './changepassword.css';

export default class ChangePassword extends React.Component {
  state = { open: true }
  show = (trigger) => () => this.setState({ dimmer, open: true })

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  close = () => hashHistory.push ('/chat');

  render() {
    const { open, trigger,closeOnRootNodeClick } = this.state
    return (
      <Modal
      trigger={trigger}
      open={open} onClose={this.close}
      closeOnRootNodeClick={false}
      size='small' closeIcon="close" basic
      >
      <Modal.Header id="headerchange"><h1>Reset Password</h1></Modal.Header>
      <Modal.Content>
      <Form>
      <Form.Field width={8} id='forminput'>
      <h3>  <Icon circular  name='lock'>
      </Icon> <label>NewPassword</label></h3>
      <input placeholder='NewPassword'  />
      </Form.Field >
      <Form.Field width={8} id='forminput'>
      <h3>  <Icon circular  name='lock'>

      </Icon><label>ConfirmPassword</label></h3>
      <input type='password' placeholder='confirmpassword'/>
      </Form.Field><br/>


      <Form.Field>
      <a href ="#/left">
      <Button color='red' onClick={this.handleClose} inverted id='cancelbutton'>
      <Icon name='checkmark'/> Cancel
      </Button>
      <Button color='green' onClick={this.handleClose} inverted id='resetbutton'>
      <Icon name='checkmark' /> Reset
      </Button></a>
      </Form.Field>
      </Form></Modal.Content>
      </Modal>
      )
}
}
