import React from 'react';
import {Feed, Icon} from 'semantic-ui-react';
import {Menu, Segment, Card, Popup, Comment} from 'semantic-ui-react';
import {Grid, Image, Button, Label} from 'semantic-ui-react';
import axios from 'axios';
import {Scrollbars} from 'react-custom-scrollbars';
export default class SavedQuery extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        name : [],
        email: [],
        userinformation: [],
        message:[]
      };
      this.deletesavequery=this.deletesavequery.bind(this);
    }
      componentDidMount()
      {
        let self=this;
        axios({
            url: ' http://localhost:8080/clientinformation',
            method: 'get'
        }).then(function(response) {
            console.log("email"+response.data[0].local.email);

              axios({
                  url: 'http://localhost:8080/savequery/viewanswer',
                  method: 'POST',
                  data: {email:response.data[0].local.email}
                }).then(function(msg) {
                  console.log(msg.data);
                  console.log(msg.data[0].savedquery);
                self.setState({ userinformation: msg.data[0].savedquery});
                console.log(self.state.userinformation);
            }.bind(this)).
                catch(function(err) {
                    console.log(err);
                    });
                });
    }
  deletesavequery(queries)
        {
          var queries=queries;
          console.log(queries);
          let self=this;
          axios({
              url: ' http://localhost:8080/clientinformation',
              method: 'get'
          }).then(function(response) {
              console.log("email"+response.data[0].local.email);

                axios({
                    url: 'http://localhost:8080/savequery/deleteanswer',
                    method: 'DELETE',
                    data: {email:response.data[0].local.email,id:queries}
                  }).then(function(msg) {
                    console.log(msg.data+"vtbybybyby");
              }.bind(this)).
                  catch(function(err) {
                      console.log(err);
                      });
                  });

    }
  render() {
    var user=this.state.userinformation.map(function(newsdata) {
  return (

 <div>
   <Grid divided='vertically'>
       <Grid.Row columns={3}>
       <Grid.Column width={1}></Grid.Column>
       <Grid.Column width={14}>
         <Grid.Row></Grid.Row>
    <Card fluid >
      <Card.Content>
        <Card.Header>
                    {newsdata.question}
        </Card.Header>
      <Card.Description>
      {newsdata.answer}
      <Label onClick={() => this.deletesavequery(newsdata._id)} corner='right' icon='delete'></Label>
      </Card.Description>
        </Card.Content>
    </Card>
  </Grid.Column>
  <Grid.Column width={1}></Grid.Column>
</Grid.Row>
</Grid>
    </div>
  );
  }.bind(this));
  return(
  <div style={{ backgroundImage: "url('../../images/wall.jpg')", marginTop: '1%',height:'100%'}}>

  <Grid divided='vertically'>
    <Grid.Row columns={3}>
      <Grid.Column width={1}></Grid.Column>

      <Grid.Column width={12}>

<Card fluid>
        <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
            display: "none",
            position: "right"
        }}/>} autoHeight autoHeightMin={555}>
            <div >

                    {user}
</div></Scrollbars>  </Card>
          </Grid.Column>

          <Grid.Column width={3}></Grid.Column>
  </Grid.Row>
  </Grid>

  </div>
  );
  }
  }
