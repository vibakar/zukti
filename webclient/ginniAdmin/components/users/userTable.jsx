import React from 'react';
import {Grid, Image,Feed,Icon} from 'semantic-ui-react';
import { Button} from 'semantic-ui-react';
import Axios from 'axios';
import ViewUserChat from './viewUserChat';
import './usertable.css';
export default class UserTable extends React.Component
{
  constructor() {
      super();
      this.state = {
        name : [],
        email: [],
        userinformation: []
      };
    }
    componentDidMount() {
      var self=this;
      Axios({
      url: 'http://localhost:8080/viewall',
      method: 'GET'
    }).then(function(response) {
    self.setState({ userinformation: response.data});
    console.log(response.data);
}).
    catch(function(err) {
        console.log(err);
        });
    }
    history(email){
alert(email);
    }

 render() {
    let user=this.state.userinformation.map(function(newsdata) {
return (
  <div id='eachcardstyle'>
    <Grid>
      <Grid.Row>
        <Grid.Column width={1} />
      <Grid.Column width={3}>
        <center><Image avatar size='mini' src={newsdata.local.photos}/>
      </center>
    </Grid.Column>
          <Grid.Column width={3}>
          <b>{newsdata.local.name}</b>
        </Grid.Column>
        <Grid.Column width={5}>
          <b>{newsdata.local.email}</b>
        </Grid.Column>
<Grid.Column width={2}>
          <div>
            <ViewUserChat userEmail={newsdata.local.email}/>
          </div>
        </Grid.Column>
        <Grid.Column width={1} />
</Grid.Row>
</Grid>
    </div>
  );
}.bind(this));
return(
<div style={{ backgroundImage: "url('../../images/wall.jpg')", height: '100%', marginTop: '1%'}}>

 {user}

</div>
);
}
}
