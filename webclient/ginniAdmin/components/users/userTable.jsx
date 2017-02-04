import React from 'react';
import {Grid, Image, Card} from 'semantic-ui-react';
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
}.bind(this)).
    catch(function(err) {
        console.log(err);
        });
    }
    history(email){
console.log(email);
    }
  render() {
    let user=this.state.userinformation.map(function(newsdata) {
return (
  <div id='eachcardstyle'>
    <Card id='parentcard'>
      <Card.Content>
        <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>
        {newsdata.local.name}
        </Card.Header>
        <Card.Meta>
        {newsdata.local.email}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div>
          <ViewUserChat userEmail={newsdata.local.email}/>
        </div>
      </Card.Content>
    </Card>
    </div>
  );
}.bind(this));
return(
<div style={{ backgroundImage: "url('../../images/wall.jpg')", height: '100%', marginTop: '1%'}}>
  <Grid divided='vertically'>
    <Grid.Row columns={3}>
    <Grid.Column width={1}/>
    <Grid.Column width={14} id='cardlayoutstyle'>
        <Card.Group id='cardgrouplayout'>
  {user}
</Card.Group>
</Grid.Column>
</Grid.Row>
</Grid>
</div>
);
}
}
