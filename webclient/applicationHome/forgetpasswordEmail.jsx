import React from 'react';
import {Grid, Button} from 'semantic-ui-react';
import './applicationHome.css';
export default class ForgetpasswordEmail extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div style={{ backgroundImage: "url('../../images/homes.jpg')"}} >
      <Grid container={'true'} centered={'true'}>
      <Grid.Row/>
      <Grid.Row>
      <Grid.Column width={2}>
      <h1 id="genie">GENIE</h1>
      </Grid.Column>
      <Grid.Column width={9} />
      <Grid.Column width={5}>
      <h2>
      <Button className="buttonlogin" circular style={{backgroundColor: 'white'}} ><a href="#/login" id="head" style={{color: 'black'}}>LOGIN</a></Button>
      &nbsp;&nbsp;<Button className="buttonsignin" circular style={{backgroundColor: 'white'}} ><a href="#/signup" id="head" style={{color: 'black'}}>SIGNUP</a></Button></h2>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row/>
      <Grid.Row/>
      <Grid.Row/>
      <Grid.Row/>
      <Grid.Row>
      <Grid.Column style={{textAlign: 'center'}}>
        <p id='head1'>  Please click the reset link to change password<br/>
        <h3 id='head4'>Verification link is sent to your Registered mail</h3>
        <h1 id='head4'>"You can change your password now..!!"</h1>
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
