import React from 'react';
import {hashHistory} from 'react-router';
import {Button, Image, Modal} from 'semantic-ui-react';
import {Form} from 'semantic-ui-react';
import validator from 'validator';
import axios from 'axios';
import './signup.css';
export default class Signup extends React.Component {
    constructor()
    {
        super();
        this.state = {
            emailId: '',
            userexists: '',
            firstname: '',
            lastname: '',
            email: '',
            message: '',
            errorfirst: false,
            errorlast: false,
            erroremail: false,
            errorrepassword: false,
            errorpassword: false,
            errormessageemail: '',
            errormessagefirst: '',
            errormessagelast: '',
            errormessage: '',
            errormessagepassword: '',
            repassword: '',
            password: '',
            mailexists: false,
            decoration: false,
            confirmpassword: false,
            verifypassword: false,
            open: true
        };
        this.onRegisterUser = this.onRegisterUser.bind(this);
    }
    show = (dimmer) => () => this.setState({dimmer, open: true})
    close = () => hashHistory.push('/');
    // email verification link
    sentemail(email) {
        axios({
            url: ' http://localhost:8080/send',
            method: 'post',
            data: {
                data: email
              }
            }).then(function(msg) {
                hashHistory.push('/mail');
            }).catch(function(err) {
                // alert(err);
            })
        }
    // new user signup
    onRegisterUser(e, value) {
      e.preventDefault();
      axios({
        url: 'http://localhost:8080/signup',
        method: 'post',
        data: value.formData
      }).then(function(msg) {
          console.log(msg.firstname);
      }).catch(function(err) {
          console.log(err);
          // alert(err + 'check the details' + Object.keys(value.formData));
      });
      this.sentemail(value.formData.email);
  }
    // validation for firstname
    ChangeFirst = (event) => {
        this.setState({firstname: event.target.value});
        if (validator.isAlpha(event.target.value)) {
            this.setState({errorfirst: false});
            this.setState({errormessagefirst: false});
        } else {
            this.setState({errorfirst: true});
            this.setState({errormessagefirst: 'Enter a valid name'});
        }
    }
    // validation for lastname
    ChangeLast = (event) => {
        this.setState({lastname: event.target.value});
        if (validator.isAlpha(event.target.value)) {
            this.setState({errorlast: false});
            this.setState({errormessagelast: false});
        } else {
            this.setState({errorlast: true});
            this.setState({errormessagelast: 'Enter a valid name'});
        }
    }
    // validation for email
    ChangeEmail = (event) => {
        this.setState({email: event.target.value});
        // console.log(event.target.value);
        // check whether the user is alreay exists or not
        if (validator.isEmail(event.target.value)) {
          var self=this;
            axios({
                url: ' http://localhost:8080/checkuser',
                method: 'POST',
                data: {
                    email: event.target.value
                }
              }).then(function(response) {
                    if (response.data.userexists) {
                      self.setState({userexists: 'Already Exists'});
                      self.setState({mailexists: false});
                        // console.log(msg);
                    } else {
                        // console.log(msg);
                        self.setState({userexists: ' '});
                        self.setState({mailexists: true});
                    }
                }).catch(function(err) {
                    // console.log(err);
                });
            this.setState({erroremail: false});
            this.setState({errormessageemail: false});
        } else {
            this.setState({erroremail: true});
            this.setState({errormessageemail: 'Enter your full email address, including the \@\ '});
        }
    }
    // validation for password
    ChangePassword = (event) => {
        this.setState({password: event.target.value});
        // console.log(event.target.value)
        let points = event.target.value.length;
        let password_info = event.target.value;
        let has_letter = new RegExp('[a-z]');
        let has_caps = new RegExp('[A-Z]');
        let has_numbers = new RegExp('[0-9]');
        if (has_letter.test(password_info) && points >= 6 && has_caps.test(password_info) && has_numbers.test(password_info)) {
            this.setState({errorpassword: false});
            this.setState({errormessagepassword: false});
              this.setState({verifypassword: true});
        } else {
            this.setState({errorpassword: true});
            this.setState({verifypassword: false});
            this.setState({errormessagepassword: 'Password should contain numbers,letters(capital and small) and Length should be greater than 6'});
        }
    }
    // validation for confirmpassword
    ChangeRepassword = (event) => {
        this.setState({repassword: event.target.value});
        if (validator.equals(event.target.value, this.state.password)) {
          // checking equality between password and confirmpassword
          this.setState({errorrepassword: false});
          this.setState({errormessage: false});
            this.setState({confirmpassword: true});
      } else {
        this.setState({confirmpassword: false});
        this.setState({errorrepassword: true});
        this.setState({errormessage: 'Not matched'});
    }
}
render() {
    const {open, dimmer} = this.state;
    return (
        <div>
        <Modal  dimmer={dimmer} open={open} onClose={this.close} size="small" closeIcon="close">
        <Modal.Header id="signup"><Image src="../../images/ginianim.gif" avatar/>Sign Up</Modal.Header>
        <Modal.Content>
        <Form id="formfield" onSubmit={this.onRegisterUser}>
        <Form.Field id="formfield">
        <Form.Input label='First Name' name='firstName' placeholder='First Name' type='text' onChange={this.ChangeFirst} error={this.state.errorfirst} required/>
        <p id="textcolor">{this.state.errormessagefirst}</p>
        </Form.Field>
        <Form.Field id="formfield">
        <Form.Input label='Last Name' id="input" name="lastName" placeholder='Last Name' type='text' onChange={this.ChangeLast.bind(this)} error={this.state.errorlast} required/>
        <p id="textcolor">{this.state.errormessagelast}</p>
        </Form.Field>
        <Form.Field id="formfield">
        <Form.Input label='EMail' id="to" name="email" placeholder='User Name or Email-ID' type='text' onChange={this.ChangeEmail.bind(this)} error={this.state.erroremail} required/>
        <p id="textcolor">{this.state.errormessageemail}</p>
        <p id="textcolor">{this.state.userexists}</p>
        </Form.Field>
        <Form.Field id="formfield">
        <Form.Input label='Password' id="input" name="password" placeholder='Password' type='password' onChange={this.ChangePassword.bind(this)} error={this.state.errorpassword} required/>
        <p id="textcolor">{this.state.errormessagepassword}</p>
        </Form.Field>
        <Form.Field id="formfield">
        <Form.Input label='Confirm Password' id="input" name="repassword" type='password' placeholder='Confirm Password' onChange={this.ChangeRepassword.bind(this)} error={this.state.errorrepassword} required/>
        <p id="textcolor">{this.state.errormessage}</p>
        </Form.Field>
        <Button type='submit' id='buttonstyle' circular disabled={(!this.state.firstname) || (!this.state.lastname) || (!this.state.email) || (!this.state.password) || (!this.state.repassword) || (!this.state.mailexists) || (!this.state.verifypassword) || (!this.state.confirmpassword)}>SET UP YOUR ACCOUNT</Button>
        <span id="message"/>
        <h4 id="text">Already a Genie member?<a href='#/login'>
        Sign in here</a>
        </h4>
        </Form>
        </Modal.Content>
        </Modal>
        </div>
        );
}
}
