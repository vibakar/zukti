import React from 'react'
import { Button, Header, Icon, Modal,Form,Input} from 'semantic-ui-react';
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
      size='small' closeIcon="close"
      >
      <Modal.Header id="headerchange"><h1>Reset Password</h1></Modal.Header>
      <Modal.Content>
      <Form>
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
      <Button color='green' onClick={this.handleClose} inverted id='resetbutton'>
      <Icon name='checkmark' /> Reset
      </Button></a>
      </Form.Field>
      </Form></Modal.Content>
      </Modal>
      )
}
}
