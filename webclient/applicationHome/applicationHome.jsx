import React from 'react';
import {Card, Rating, Grid,  List, Image, Header,Menu,Button,Divider,Icon,Modal,Input} from 'semantic-ui-react';
import './applicationHome.css';
import {Scrollbars} from 'react-custom-Scrollbars';
import {Link} from 'react-router';

export default class AdminWelcomePage extends React.Component {
  constructor(){
    super();
  }

render(){
    return(
<div style={{ backgroundImage: "url('../../images/homes.jpg')"}} >

<Grid container={'true'} centered={'true'}>
<Grid.Row></Grid.Row>
  <Grid.Row>
    <Grid.Column width={2}>
      <h1 id="genie">GENIE</h1>
    </Grid.Column>
    <Grid.Column width={9} ></Grid.Column>
    <Grid.Column width={5}>

     <h2>
      <a href="#/login" id="head" style={{color:'black'}}><Button className="buttonlogin" circular style={{backgroundColor:'white'}} >LOGIN</Button></a>
            &nbsp;&nbsp;<a href="#/signup" id="head" style={{color:'black'}}><Button  className="buttonsignin" circular style={{backgroundColor:'white'}} >SIGNUP</Button></a></h2>
  </Grid.Column>
  </Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
<Grid.Row></Grid.Row>


 <Grid.Row>

   <Grid.Column style={{textAlign:'center'}}>

     <p id='head1'>HERE COMES YOUR GENIE<br/>

     <h5 id='head2'>ANY QUERY HITS YOU HARDER? THEN I AM HERE TO PROVIDE YOU DAZZLING SOLUTIONS</h5>
      <h5 id='head3'>"TO ITERATE IS HUMAN, TO RECURSE DIVINE "</h5>

 </p>



</Grid.Column>
</Grid.Row>

 <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row><a href="http://www.pcadvisor.co.uk/feature/software/what-are-bots-facebook-messenger-skype-skyscanner-3638979/" id="head" style={{color:'black'}}><Button className="buttonlogin" circular style={{backgroundColor:'white'}} >EXPLORE</Button></a></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>



</Grid>
</div>
      );
}
}
