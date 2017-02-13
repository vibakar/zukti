import React from 'react';
import {Feed, Icon} from 'semantic-ui-react';
import {Menu, Segment, Card, Popup, Comment} from 'semantic-ui-react';
import {Grid, Image, Button, Label} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';
import Snackbar from 'material-ui/Snackbar';
import Axios from 'axios';
export default class SavedQuery extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        name : [],
        email: [],
        userinformation: [],
        message:[],
        openSnackbar: false,
        snackbarMsg: ''
      };
      this.deletesavequery=this.deletesavequery.bind(this);
    }
    handleRequestClose = () => {
        this.setState({openSnackbar: false});
    };
      componentDidMount()
      {
        let self=this;
        Axios({
            url: ' http://localhost:8080/clientinformation',
            method: 'get'
        }).then(function(response) {
            console.log("email"+response.data[0].local.email);

              Axios({
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
          this.setState({openSnackbar: true, snackbarMsg:"Deleted"});
          let self=this;
          Axios({
              url: ' http://localhost:8080/clientinformation',
              method: 'get'
          }).then(function(response) {
              console.log("email"+response.data[0].local.email);

                Axios({
                    url: 'http://localhost:8080/savequery/deleteanswer',
                    method: 'POST',
                    data: {email:response.data[0].local.email,id:queries}
                  }).then(function(msg) {
                    console.log(msg.data.msg)
                    console.log(self.state.userinformation);
                    self.setState(
                      {
                        userinformation:msg.data.msg
                      }
                    )
              }.bind(this)).
                  catch(function(err) {
                      console.log(err);
                      });
                  });

    }
  render() {
    const {open} = this.state
    var user=this.state.userinformation.map(function(newsdata) {
  return (

 <div>
    <Card fluid style={{background:'#F1F8E9',borderStyle:'solid',borderWidth:'thin',borderColor:'teal'}}>
      <Card.Content >
      <h4>  {newsdata.date}</h4>
      <Card.Description style={{color:'black'}}>
      {newsdata.answer}
      <Popup positioning='left center' offset={5} inverted size='mini' trigger={<Label onClick={() => this.deletesavequery(newsdata._id)} corner='right' size='mini' icon='delete'></Label>} content='Delete'/>
      </Card.Description>
        </Card.Content>
    </Card>
    <br/>
    </div>
  );
  }.bind(this));
  return(
  <div style={{ backgroundImage: "url('../../images/background.jpg')", marginTop: '1%',height:'absolute'}}>

  <Grid divided='vertically'>
    <Grid.Row columns={3}>
      <Grid.Column width={1}></Grid.Column>

      <Grid.Column width={13}>
        <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
            display: "none",
            position: "right"
        }}/>} autoHeight autoHeightMin={555}>
            <div style={{width:'99%'}}>
                    {user}
</div>
</Scrollbars>
          </Grid.Column>
  </Grid.Row>
  <Snackbar open={this.state.openSnackbar} message={this.state.snackbarMsg} autoHideDuration={1200} onRequestClose={this.handleRequestClose}/>
  </Grid>

  </div>
  );
  }
  }
