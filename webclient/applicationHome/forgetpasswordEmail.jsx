import React from 'react';
import {Card, Rating, Grid,  List, Image, Header,Menu,Button,Divider,Icon,Modal,Input} from 'semantic-ui-react';
import './applicationHome.css';
import {Scrollbars} from 'react-custom-Scrollbars';
import {Link} from 'react-router';
export default class ForgetpasswordEmail extends React.Component {
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
      <p id='head1'>You can change your password now!!!!!!!<br/>
      <h3 id='head4'>Verification link sent to your Mail</h3>
      <h4 id='head4'>"Please check your mail for change your password"</h4>
    </p>
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
