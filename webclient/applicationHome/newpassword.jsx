import validator from 'validator';
import React from 'react';
import Axios from 'axios';
import {hashHistory} from 'react-router';
import {Button, Form, Divider, Icon, Dimmer, Header, Image} from 'semantic-ui-react';
import './newpassword.css';

export default class NewPassword extends React.Component {
    constructor()
    {
        super();
        this.state = {
            errorrepassword: false,
            errorpassword: false,
            errormessage: '',
            errormessagepassword: '',
            repassword: '',
            password: ''
        };
        this.onSubmitData = this.onSubmitData.bind(this);
    }
    handleOpen = () => this.setState({ active: true })
    handleClose = () => this.setState({ active: false })
    // update the password in database
    onSubmitData(e, value) {
      e.preventDefault();
        Axios({
            url: ' http://localhost:8080/updatepassword',
            method: 'post',
            data: {
                id: this.props.location.query.id,
                pass: value.formData.password
            }
          }).then(function(response) {
                hashHistory.push('/login');
            }).
            catch(function(error) {
                // alert('check the details');
            });
    }
  // validation for password
    ChangePassword = (event) => {
        this.setState({password: event.target.value});
        // console.log(event.target.value);
        let points = event.target.value.length;
        let password_info = event.target.value;
        let has_letter = new RegExp('[a-z]');
        let has_caps = new RegExp('[A-Z]');
        let has_numbers = new RegExp('[0-9]');
        if(event.target.value.length >4){
        if (has_letter.test(password_info) && points >= 6 && has_caps.test(password_info) && has_numbers.test(password_info)) {
            this.setState({errorpassword: false});
            this.setState({errormessagepassword: false});
        } else {
            this.setState({errorpassword: true});
            this.setState({errormessagepassword: 'Password should contain numbers,letters(A&a) and minimum length 6'});
        }
      }
    }
      // validation for confirmpassword
    ChangeRepassword = (event) => {
        this.setState({repassword: event.target.value});
        if(event.target.value >4){
      // checking equality between password and confirmpassword
        if (validator.equals(event.target.value, this.state.password)) {
            this.setState({errorrepassword: false});
            this.setState({errormessage: ''});
        } else {
            this.setState({errorrepassword: true});
            this.setState({errormessage: 'Password mismatch'});
        }
      }
    }
    render() {
      const {active} = this.state;
        return (
            <div id="newpassword" style={{ backgroundImage: "url('../../images/intro-bg.jpg')"}} >
                <br/><br/><br/><br/><br/><br/><br/>
                  <Form onSubmit={this.onSubmitData} >
                    <Form.Field >
                        <h3 id='heading'><Icon name='lock' id='icon'/>Reset your password</h3><Divider id='divider'/>
                        <h3 style={{color:'white',fontStyle:'italic'}}>Enter new password </h3><br/>
                        <Form.Input type='password' placeholder='new password' circular id='fields' icon='key' iconPosition='left' name="password" onChange={this.ChangePassword.bind(this)} error={this.state.errorpassword} required/><br/>
                        <p style={{color: 'red'}}>{this.state.errormessagepassword}</p>
                        <Form.Input type= 'password' placeholder='confirm password' id='fields' icon='key' iconPosition='left' name="repassword" onChange={this.ChangeRepassword.bind(this)} error={this.state.errorrepassword} required/><br/>
                        <p style={{color: 'red'}}>{this.state.errormessage}</p>
                        <Button type='submit' id='submit' onClick={this.handleOpen} circular disabled={(!this.state.repassword) || (!this.state.password) || (this.state.errorrepassword)}>submit</Button>
                        <Dimmer
                                 active={active}
                                 onClickOutside={this.handleClose}
                                 page>

                                <Header as='h2' icon inverted>
                                <Image src='../images/mail.gif' size='small'/><br/><br/>
                                   Redirecting to our Genie!!!<br/><br/>
                                   <Header.Subheader>It may take few minutes</Header.Subheader>
                                 </Header>
                        </Dimmer>
                    </Form.Field>
                </Form>
</div>
        );
    }
}
