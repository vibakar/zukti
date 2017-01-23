import React from 'react';
import {Button,Input,Modal,Icon,Image,Divider,Header,Form,Grid, Segment,List} from 'semantic-ui-react';
import ForgotPassword from './forgotpassword.jsx';
import {Router, Route, hashHistory} from 'react-router';
import './loginpage.css';
import AdminWelcomePage from './carousel.jsx'
export default class LoginPage extends React.Component
{
  state = { open: true }
 show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => hashHistory.push ('/a');
 render() {
   const { open, dimmer,closeOnRootNodeClick } = this.state
    return(
      <div>
      <Modal dimmer={dimmer} open={open} onClose={this.close}
        closeOnRootNodeClick={false}  closeIcon='close'>
        <Modal.Header id="headerstyle"><h1><Image src='../../images/genie1.gif' avatar/>Welcome to Genie</h1>
      </Modal.Header>
                      <Modal.Content>
                  <Modal.Content>
          <p id="para"><h2> Great to have you back! </h2></p>
          <p id="para1"><h2>You can sign in to Genie with your existing Genie account</h2></p>
               <Modal.Description>
                 <Grid columns={2} stackable>
           <Grid.Column>
             <Segment basic>
              <Form>
            <Form.Field>
            <h3>  <Icon circular  name='users'>
              </Icon> <label>UserName</label></h3>
              <input placeholder='username or email'  />
            </Form.Field><br/>
            <Form.Field >
               <h3>  <Icon circular  name='privacy'>

              </Icon><label>Password</label></h3>
             <input type='password' placeholder='password'/>
            <List> <List.Item as='a'>  <a href="#/forgotpassword">Forgot password?</a></List.Item></List>
          </Form.Field>
            <Modal.Actions>
                      <Button  color='black' onClick={this.close} >
                    <Button.Content visible id="buttonwidth1" ><Icon  name='sign in'/>Login</Button.Content>
                      </Button>
                      <List>
                      <p id="footer">New Here? <List.Item as='a'> <a href="#/signup">Create an Genie Account</a></List.Item></p></List>
                    </Modal.Actions>
          </Form>
        </Segment>
         </Grid.Column>
         <Grid.Column >
           <Segment basic>
             <Modal.Actions id="buttonstylelogin" >
                     <Button color='blue' >
                      <Button.Content visible id="buttonwidth"><Icon  name='facebook'/>Sign Up With Facebook</Button.Content>
                   </Button>
                             <Button color='red' >
                            <Button.Content visible id="buttonwidth"  ><Icon  name='google'/>Sign Up With Google</Button.Content>
                   </Button>
                   </Modal.Actions>
                 </Segment>
          </Grid.Column>


        </Grid>
        </Modal.Description>
               </Modal.Content>

                </Modal.Content>

              </Modal>

</div>
);
}
}
