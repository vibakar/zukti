import React from 'react';
import {Grid, Image, Card} from 'semantic-ui-react';
import { Button} from 'semantic-ui-react';
import axios from 'axios';
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
    componentWillMount() {
      axios({
      url: 'http://localhost:8080/viewall',
      method: 'GET'
    }).then(function(response) {
    this.setState({ userinformation: response.data});
    console.log(response.data);
}.bind(this)).
    catch(function(err) {
        console.log(err);
        });
    }

  render() {
    var user=this.state.userinformation.map(function(newsdata) {
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
          <Button basic color='green'>ViewMore</Button>
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
