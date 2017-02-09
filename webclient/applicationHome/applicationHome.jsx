import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import './applicationHome.css';
import Home from  '../config/Home.json';
export default class AdminWelcomePage extends React.Component {
  constructor() {
    super();
  }

render(){
      return(
<div style={{ backgroundImage: "url('../../images/intro-bg.jpg')"}} >

<Grid container={'true'} centered={'true'}>
<Grid.Row/>
  <Grid.Row>
    <Grid.Column width={2}>
      <h1 id="genie">GENIE</h1>
    </Grid.Column>
    <Grid.Column width={9} />
    <Grid.Column width={5}>


      <h2>
      <a href='#/login'><Button className="buttonlogin" circular style={{backgroundColor:'white'}}><a href="#/login" id="head" >LOGIN</a></Button></a>
            &nbsp;&nbsp;<a href='#/signup'><Button  className="buttonsignin" circular style={{backgroundColor:'white'}} ><a href="#/signup" id="head" >SIGNUP</a></Button></a></h2>


  </Grid.Column>
  </Grid.Row>
  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>
<Grid.Row/>
 <Grid.Row>

    <Grid.Column style={{textAlign: 'center'}}>

     <p id='head1'>{Home.head1}<br/>

     <h5 id='head2'>{Home.head2}</h5>
      <h5 id='head3'><i>{Home.head3}</i></h5>
 </p>
</Grid.Column>
</Grid.Row>

 <Grid.Row/>

  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>

  <Grid.Row/>
  <Grid.Row/>

  <Grid.Row><a href="http://www.pcadvisor.co.uk/feature/software/what-are-bots-facebook-messenger-skype-skyscanner-3638979/" id="head" style={{color:'black'}}><Button className="buttonlogin" circular style={{backgroundColor:'white'}} >EXPLORE</Button></a></Grid.Row>

  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>
  <Grid.Row/>


</Grid>
</div>
      );
}
}
