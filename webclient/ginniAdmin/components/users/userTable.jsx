import React from 'react'
import { Icon, Table,Grid,Image ,Header,Card} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';
import { Button, Modal,Rating ,Menu, Comment, Popup,List} from 'semantic-ui-react';

import axios from 'axios';
import './usertable.css';
export default class UserTable extends React.Component
{
  constructor() {
      super();
      this.state = {
        name:[],
        email:[],
        userinformation:[]
      };
    }
    componentWillMount() {
      axios({
      url:'http://localhost:8080/view',
      method: 'GET'
    }).then(function(msg) {
    this.setState({userinformation:msg.data});
    console.log(this.state.userinformation);

}.bind(this)).
    catch(function(err) {
        console.log("hi"+err);
        });
    }

  render() {
    var user=this.state.userinformation.map(function(newsdata){
return (
  <div id="fullbackground">

    <Card >
      <Card.Content>
        <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>
        {newsdata.name}
        </Card.Header>
        <Card.Meta>
        {newsdata.email}
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
<div>
  <Grid divided="vertically">
    <Grid.Row columns={3}>
    <Grid.Column width={1}/>
    <Grid.Column width={14}>
        <Card.Group>
  {user}
</Card.Group>
</Grid.Column>
</Grid.Row>
</Grid>
</div>
);

}
}
