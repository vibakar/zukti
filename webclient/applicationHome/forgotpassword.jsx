import React from 'react';
import {Button,Input,Icon,Image,Header,Form,Grid,Divider,Menu,Card} from 'semantic-ui-react';
import './forgotpassword.css';
export default class ForgotPassword extends React.Component
{
 render() {
    return(
      <div>
        <br/><br/>
                 <Grid columns={3}>
                   <Grid.Column width={5}>
                     <Menu  fixed='top'  style={{background:'black'}}>
      <Menu.Item style={{color:'white'}}>
      <h1 style={{fontFamily:'monospace'}}>GENIE</h1>
      </Menu.Item>
      <Menu.Menu position='right'>
      <Menu.Item>
      <Button  circular style={{backgroundColor:'white',color:'black'}}>  <a href="#/a">Login</a></Button>
      &nbsp;&nbsp;<Button  circular style={{backgroundColor:'white',color:'black'}} ><a href="#/a">Signup</a></Button>
      </Menu.Item>
      </Menu.Menu>
    </Menu>
                     </Grid.Column>
   <Grid.Column Width={6} id="gridstyle" >

      <Header id="headerstylefor"><h2>Request a Password Reset</h2></Header>
     <Divider/>
<p id="textstyle"><h4>Don't worry! Just fill in your email and we'll help you reset your password.</h4></p>
      <Form >
    <Form.Field id="forgotfield" >
    <h3>  <Icon circular  name='mail outline'>
       </Icon><label>Email</label></h3>
      <input placeholder='Email id' />
      </Form.Field>
              <Button id="buttonstylefor">Send </Button>

 </Form>

</Grid.Column>
 <Grid.Column width={5}></Grid.Column>
</Grid>
</div>
);
}
}
