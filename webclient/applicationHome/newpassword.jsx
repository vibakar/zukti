import validator from 'validator';
import React from 'react';
import axios from 'axios';
import {hashHistory} from 'react-router';
import {Button, Form, Label, Divider} from 'semantic-ui-react';
import './newpassword.css';

export default class NewPassword extends React.Component {
    constructor()
    {
        super();
        this.state = {
            errorrepassword: false,
            errorpassword: false,
            errormessage: "",
            errormessagepassword: "",
            repassword: "",
            password: ""
        };
        this.onSubmitData = this.onSubmitData.bind(this);
    }
    //update the password in database
    onSubmitData(e, value) {
      e.preventDefault();
        axios({
            url: ' http://localhost:8080/updatepassword',
            method: 'post',
            data: {
                id: this.props.location.query.id,
                pass: value.formData.password
            }
          }).
            then(function(msg) {
                hashHistory.push('/');
            }).
            catch(function(err) {
                alert('check the details');
            })
    }
  //validation for password
    ChangePassword = (event) => {
        this.setState({password: event.target.value});
        // console.log(event.target.value);
        var points = event.target.value.length;
        var password_info = event.target.value;
        var has_letter = new RegExp('[a-z]');
        var has_caps = new RegExp('[A-Z]');
        var has_numbers = new RegExp('[0-9]');
        if (has_letter.test(password_info) && points >= 6 && has_caps.test(password_info) && has_numbers.test(password_info)) {
            this.setState({errorpassword: false});
            this.setState({errormessagepassword: false});
        } else {
            this.setState({errorpassword: true});
            this.setState({errormessagepassword: 'Password should contain numbers,letters and Length should be greater than 6'});
        }
    }
      //validation for confirmpassword
    ChangeRepassword = (event) => {
        this.setState({repassword: event.target.value});

      //checking equality between password and confirmpassword
        if (validator.equals(event.target.value, this.state.password)) {
            this.setState({errorrepassword: false});
            this.setState({errormessage: ''});
        } else {
            this.setState({errorrepassword: true});
            this.setState({errormessage: 'Pls enter correct password'});
        }
    }
    render() {
        return (
            <div id='newpassword'>
                <Form onSubmit={this.onSubmitData}>
                    <Form.Field >
                        <h3 id='heading'>Reset your new password</h3><Divider id='divider'/><br/>

                      <Label pointing='right' id='labelpassword'>new password</Label>
                        <Form.Input type='password' placeholder='password' id='fields' name="password" onChange={this.ChangePassword.bind(this)} error={this.state.errorpassword} required/><br/><br/><br/>
                        <p>{this.state.errormessagepassword}</p>
                        <Label pointing='right' id='labelpassword'>confirm password</Label>
                        <Form.Input type='password' placeholder='password' id='fields' name="repassword" onChange={this.ChangeRepassword.bind(this)} error={this.state.errorrepassword} required/><br/><br/><br/>
                        <p>{this.state.errormessage}</p>
                        <Button size='small' id='submit' type='submit'>submit</Button>
                    </Form.Field>
                </Form>
            </div>
        );
    }
}
