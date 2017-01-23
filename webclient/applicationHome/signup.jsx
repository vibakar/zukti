import React, { Component } from 'react'
import {Router, Route, hashHistory} from 'react-router';
import { Grid,Popup, Button, Header, Image, Modal } from 'semantic-ui-react'
import { Card, Feed, Icon} from 'semantic-ui-react'
import { Checkbox, Form } from 'semantic-ui-react'
import AdminWelcomePage from './carousel.jsx'
import './signup.css';

export default class Signup extends React.Component {
  state = { open: true }
  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => hashHistory.push('/a');
    render() {
      const { open, dimmer } = this.state;
        return (
          <div >
            <Grid centered={'true'} container={'true'}>
            <Grid.Column width={10}></Grid.Column>
            <Grid.Column width={5}>

             <Modal id="modelwindow" dimmer={dimmer} open={open} onClose={this.close} size="small" closeIcon="close">
                       <Modal.Header id="signup"><Image src="../../images/genie1.gif" avatar/>SIGN UP</Modal.Header>
                       <Modal.Content>

             <Form size="small" id="formfield">
      <Form.Field id="formfield">
      <h4>FIRST NAME</h4>
        <input id="input" placeholder='First Name' />
      </Form.Field>
      <Form.Field id="formfield">
        <h4>LAST NAME</h4>
        <input id="input" placeholder='Last Name' />
      </Form.Field>
      <Form.Field id="formfield">
        <h4>USER-NAME or EMAIL-ID</h4>
        <input id="input" placeholder='User Name or Email-ID' />
      </Form.Field>
      <Form.Field id="formfield">
      <h4>PASSWORD</h4>
        <input id="input" placeholder='Password' />
      </Form.Field>
      <Form.Field id="formfield">
        <h4>CONFIRM PASSWORD</h4>
        <input id="input" placeholder='Confirm Password' />
      </Form.Field>
      <Form.Field id="formfield">
        <Checkbox id="checkbox" label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit' id='buttonstyle' >SET  UP  YOUR  ACCOUNT</Button>
<h4 id="text">Already a Genie member?<a href='#/login'> Sign in here</a></h4>

   </Form>

       </Modal.Content>
      </Modal>
    </Grid.Column>
        <Grid.Column width={1}></Grid.Column>

    </Grid>
          </div>
        )
      }
    }
