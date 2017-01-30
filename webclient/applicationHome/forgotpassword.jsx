import React from 'react';
import {
    Button,
    Icon,
    Header,
    Form,
    Grid,
    Divider,
    Menu
} from 'semantic-ui-react';
import validator from 'validator';
import {hashHistory} from 'react-router';
import './forgotpassword.css';
import axios from 'axios';
export default class ForgotPassword extends React.Component
{
    constructor() {
        super();
        this.state = {
            email: ' ',
            erroremail: false,
            errormessageemail: '',
              userexists: ''
        };
        this.onSubmitData = this.onSubmitData.bind(this);
    }
    // sending the email verification for reset password
    onSubmitData(e, value) {
        e.preventDefault();
        axios({
            url: ' http://localhost:8080/forgetpassword',
            method: 'post',
            data: {
                email: value.formData.email
              }
            }).then(function (response) {
                hashHistory.push('/forgetmail');
            })
             .catch(function (error) {
                 console.log(error);
            });
    }
    ChangeEmail = (event) => {
        this.setState({email: event.target.value});
        // console.log(event.target.value);
        // check whether the user is alreay exists or not
        if (validator.isEmail(event.target.value)) {
          var self = this;
            axios({
                url: ' http://localhost:8080/checkuser',
                method: 'POST',
                data: {
                    email: event.target.value
                }
              }).then(function(response) {
                    if (response.data.userexists) {
                        // console.log(msg);
                        self.setState({userexists: 'We Found Your Mail'});
                        self.setState({checkmail: true});
                    } else {
                        // console.log(msg);
                      self.setState({userexists: 'No such email exists in Genie. Please sign up'});
                      self.setState({checkmail: false});
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
    render() {
        return (
            <div style={{backgroundImage: "url('../../images/wall.jpg')", height: '100%'}}>
                <br/><br/>
                <Grid columns={3}>
                    <Grid.Column width={5}>
                        <Menu fixed='top' style={{
                            background: 'transparent'
                        }} secondary>
                            <Menu.Item>
                                <h1 style={{
                                    fontFamily: 'monospace'

                                }}>GENIE</h1>
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Button circular style={{
                                        background: 'transparent'

                                    }}>
                                        <a href="#/login" style={{color: 'black'}}>Login</a>
                                    </Button>
                                    &nbsp;&nbsp;<Button circular style={{
                background: 'transparent'

            }}>
                                        <a href="#/signup" style={{color: 'black'}}>Signup</a>
                                    </Button>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column Width={6} id="gridstyle">
                       <Header id="headerstylefor">
                            <h2><Icon name='mail' id='mailicon'/>Request a Password Reset</h2>
                        </Header>
                        <Divider/>
                        <p id="textstyle">
                            <h4>Just fill in your email and we'll help you reset your password.</h4>
                        </p>
                        <Form onSubmit={this.onSubmitData}>
                            <Form.Field id="forgotfield">
                        <Form.Input placeholder= 'email id' name= "email" icon='mail outline' iconPosition='left' onChange={this.ChangeEmail.bind(this)} error={this.state.erroremail} required/>
                                <p style={{color: 'green'}}>{this.state.userexists}</p>
                                <p style={{color: '#a54f4f'}}>{this.state.errormessageemail}</p>
                            </Form.Field>
                            <Button id="buttonstylefor" type="submit" circular>Send
                            </Button>
                        </Form>
                   </Grid.Column>
                    <Grid.Column width={5}/>
                </Grid>
            </div>
        );
    }
}
