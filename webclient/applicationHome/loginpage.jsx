import React from 'react';
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
export default class LoginPage extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            erroremail: false,
            errormessageemail: '',
            email: ''
        };
        this.onSubmitLoginData = this.onSubmitLoginData.bind(this);
    }
    // function to post login data to Server
    onSubmitLoginData(e, value) {
        // console.log(value.formData);
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:8080/login',
            type: 'POST',
            data: {
                email: value.formData.userName,
                password: value.formData.password
            },
            success: function(msg) {
                alert(msg);
                hashHistory.push('/clienthome');
            },
            error: function(err) {
                alert(err + 'check the details' + Object.keys(value.formData));
            }
        });
    }
    //validation for email
    ChangeEmail = (event) => {
        this.setState({email: event.target.value});
        // console.log(event.target.value);
        if (validator.isEmail(event.target.value)) {
            this.setState({erroremail: false});
            this.setState({errormessageemail: false});
        } else {
            this.setState({erroremail: true});
            this.setState({errormessageemail: 'Enter your full email address '});
        }
    }
    show = (dimmer) => () => this.setState({dimmer, open: true})
    close = () => hashHistory.push('/');
    render() {
        const {open, dimmer} = this.state;
        return (
            <div>
            <Modal dimmer={dimmer} open={open} onClose={this.close} closeOnRootNodeClick={false} size="small" closeIcon='close'>
            <Modal.Header id="headerstyle">
            <h1><Image src='../../images/ginianim.gif' avatar/>Welcome to Genie</h1>
            </Modal.Header>
            <Modal.Content>
            <p id="para">
            <h2>
            Great to have you back!
            </h2>
            </p>
            <p id="para1">
            <h2>You can sign in to Genie with your existing Genie account</h2>
            </p>
            <Modal.Description>
            <Grid columns={2} stackable>
            <Grid.Column>
            <Segment basic>
            <Form onSubmit={this.onSubmitLoginData}>
            <Form.Field id="formfieldlogin">
            <h3>
            <Icon circular name='users'/>
            <label>UserName</label>
            </h3>
            <Form.Input name="userName" placeholder='Email' onChange={this.ChangeEmail.bind(this)} error={this.state.erroremail} required/>
            <br/>
            <p>{this.state.errormessageemail}</p>
            </Form.Field><br/>
            <Form.Field id="formfieldlogin">
            <h3><br/><br/>
            <Icon circular name='privacy'/>
            <label>Password</label>
            </h3>
            <Form.Input type='password' name="password" placeholder='password' id="formstyle" required/>
            <a href="#/forgotpassword" id='forgotpassword'>Forgot Password?</a>
            </Form.Field><br/><br/><br/>
            <Modal.Actions>
            <br/><br/><br/>
            <Button color='black' id="buttonwidth1">
            <Button.Content visible type='submit'><Icon name='sign in'/>Login</Button.Content>
            </Button><br/><br/>
            <p id="footer">New Here?
            <a href="#/signup">Create an Genie Account</a>
            </p>
            </Modal.Actions>
            </Form>
            </Segment>
            </Grid.Column>
            <Grid.Column >
            <Segment id='buttonsegment' basic>
            <Modal.Actions>
            <a href='/auth/facebook'>
            <Button color='blue' id='buttonwidthfacebook'>
            <Button.Content visible><Icon name='facebook'/>Sign Up With Facebook</Button.Content>
            </Button>
            </a>
            <a href='/auth/google'>
            <Button color='red' id='buttonwidthgoogle'>
            <Button.Content visible><Icon name='google'/>Sign Up With Google</Button.Content>
            </Button>
            </a>
            </Modal.Actions>
            </Segment>
            </Grid.Column>
            </Grid>
            </Modal.Description>
            </Modal.Content>
            </Modal>
            </div>
            );
}
}
