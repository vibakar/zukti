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
      <Button className="buttonlogin" circular style={{backgroundColor:'white'}} ><a href="#/login" id="head" style={{color:'black'}}>LOGIN</a></Button>
            &nbsp;&nbsp;<Button  className="buttonsignin" circular style={{backgroundColor:'white'}} ><a href="#/signup" id="head" style={{color:'black'}}>SIGNUP</a></Button></h2>
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

    <Button circular><a href="https://www.chatbots.org/virtual_assistant/" style={{color:'black'}}>EXPLORE</a></Button></p>
</Grid.Column>
</Grid.Row>

  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
  <Grid.Row></Grid.Row>
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
