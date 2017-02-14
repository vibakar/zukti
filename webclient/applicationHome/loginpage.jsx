import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import {
    Button,
    Modal,
    Icon,
    Image,
    Form,
    Grid,
    Segment
} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import './loginpage.css';
import validator from 'validator';
import $ from 'jquery';
export default class LoginPage extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            openSnackbar: false,
            snackbarMsg: '',
            erroremail: false,
            errormessageemail: '',
            email: '',
            validemail: ''
        };
        this.onSubmitLoginData = this.onSubmitLoginData.bind(this);
    }
    // function to post login data to Server
    onSubmitLoginData(e, value) {
        console.log(value.formData);
        e.preventDefault();
        $.ajax({
                url: 'http://localhost:8080/login',
                type: 'POST',
                data: {
                    email: value.formData.userName,
                    password: value.formData.password
                },
                success: function(response) {
                  if(response.localType === 'Admin') {
                     hashHistory.push('/adminHome');
                  }
                  else{
                    hashHistory.push('/clienthome');
                    let socket =io();
                    socket.emit('userLoginStatus',{value:1});
                  }
                },
                error: function(err) {
                    this.setState({openSnackbar: true, snackbarMsg: err.responseText});
                }.bind(this)
            });
    }
        handleRequestClose = () => {
            this.setState({openSnackbar: false});
        };
    // validation for email
    ChangeEmail = (event) => {
        this.setState({email: event.target.value});
        // check whether the user is alreay exists or not
        if(event.target.value.length> 7){
        if (validator.isEmail(event.target.value)) {
            this.setState({erroremail: false});
            this.setState({validemail: true});
            this.setState({errormessageemail: false});
        } else {
            this.setState({erroremail: true});
            this.setState({validemail: false});
            this.setState({errormessageemail: 'Enter valid email, including the \@\ '});
        }
      }
    }
    show = (dimmer) => () => this.setState({dimmer, open: true})
    close = () => hashHistory.push('/');
    render() {
        const {open, dimmer} = this.state;
        return (
            <div>
            <Modal dimmer={dimmer} open={open} onClose={this.close} closeOnRootNodeClick={false} size="small" closeIcon='close' id='modallogincss'>
            <Modal.Header id="headerstyle">
            <h1><Image src='../../images/ginianim.gif' avatar/>Welcome to Genie</h1>
            </Modal.Header>
            <Modal.Content>
            <p id="para">
            <h2>
            Nice to see you back!
            </h2>
            <h2>Go ahead and sign in</h2>
          </p>
            <Modal.Description>
            <Grid columns={2} stackable>
            <Grid.Column>
            <Segment basic>
            <Form onSubmit={this.onSubmitLoginData}>
            <Form.Field id="formfieldlogin">
            <Form.Input name= "userName" placeholder= 'Email-ID' icon='user' iconPosition='left' id="formstyle" onChange={this.ChangeEmail.bind(this)} error={this.state.erroremail} required />
            <p style={{color: '#a54f4f'}}>{this.state.errormessageemail}</p>
            </Form.Field>
            <Form.Field id="formfieldlogin"><br/>
            <Form.Input type='password' name="password" placeholder='Password' icon='lock' iconPosition='left' id="formstyle" required/>
            <a href="#/forgotpassword" id='forgotpassword'>Forgot Password?</a>
            </Form.Field><br/><br/><br/>
            <Modal.Actions>
            <Button color='teal' id="buttonwidth1" circular disabled={(!this.state.email) || (!this.state.validemail)}>
            <Button.Content type='submit' ><Icon name='sign in'/>Login</Button.Content>
            </Button><br/><br/>
            <p id="footer">Not yet registered?&nbsp;
            <a href="#/signup">Create Now</a>
            </p>
            </Modal.Actions>
            </Form>
            </Segment>
            </Grid.Column>
            <Grid.Column >
            <Segment id='buttonsegment' basic>
            <Modal.Actions>
            <a href='/auth/facebook'>
            <Button color='blue' id='buttonwidthfacebook' circular>
            <Button.Content visible><Icon name='facebook'/>Login With Facebook</Button.Content>
            </Button>
            </a>
            <a href='/auth/google'>
            <Button color='red' id='buttonwidthgoogle' circular>
            <Button.Content visible><Icon name='google'/>Login With Google</Button.Content>
            </Button>
            </a>
            </Modal.Actions>
            </Segment>
            </Grid.Column>
            </Grid>
            </Modal.Description>
            </Modal.Content>
            </Modal>
            <Snackbar open={this.state.openSnackbar} message={this.state.snackbarMsg} autoHideDuration={4000} onRequestClose={this.handleRequestClose}/>
            </div>
            );
}
}
