import React from 'react';
import axios from 'axios';
import {Grid, Button, Icon, Card,  Accordion ,Divider, Image, Label} from 'semantic-ui-react';
import TrainBot from '../trainbot/trainbot.jsx';
import IntentDropDown from '../trainbot/IntentDropDown';
import InputNewSameAsIntent from '../trainbot/inputNewSameAsIntent';
import {Scrollbars} from 'react-custom-scrollbars';
var query = '';
export default class UnansweredQueries extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          question: '',
          detailNew:[]
      }
  }
  componentDidMount() {
    console.log("nnn");
      axios({url: 'http://localhost:8080/viewquery', method: 'GET'}).then(function(msg) {
          console.log(msg.data);
          this.setState({ detailNew: msg.data});

          console.log(msg.data)

   }.bind(this)).catch(function(err) {
          console.log(err);
      });
  }

     render() {
         var user=this.state.detailNew.map(function(newsdata) {
        return (
          <div>
            <Grid >
                  <Grid.Row vertically>
                     <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={14}>
                      <Card fluid>
                        <Grid>
                          <Grid.Column width={2}>
                            <Grid.Row></Grid.Row>
                            <Grid.Row></Grid.Row>

     <Image  size='mini' style={{marginTop:'20%',marginLeft:'35%'}} src={require('../../../../webserver/images/defultImage.jpg')}/></Grid.Column>
                          <Grid.Column width={9}>
                            <Grid.Row/>
                            <h4>{newsdata.username}</h4>
                            <Grid vertically>
                              <Grid.Row columns={2}>
                                <Grid.Column width={1}>
                            <Icon name='help circle' size='large' style={{color:'red'}}/>
                          </Grid.Column>
                          <Grid.Column width={15}>
                            {newsdata.question}<br/>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                            <Grid.Row/>
                          </Grid.Column>
                          <Grid.Column width={5} style={{color:'green'}}>
                            <Grid.Row/>
                          <h5>Keyword:{newsdata.keywords}</h5>
                          <h5>Intent:{newsdata.intents}</h5>
                          <Grid.Row/>
                          </Grid.Column>
                        </Grid>
</Card>
</Grid.Column>
    </Grid.Row>
      </Grid>
    </div>
);
}.bind(this));
return(
<div style={{
    backgroundImage: 'url("../../images/background.jpg")',marginTop: '1%',
    height: '100%'
  }}>
<Grid divided='vertically'>
    <Grid.Row columns={3}>
      <Grid.Column width={1}></Grid.Column>

     <Grid.Column width={14}>
        <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
            display: "none",
            position: "right"
        }}/>} autoHeight autoHeightMin={554}>
            <div style={{width:'98%',height:'50%'}} >
              <h3>UNANSWERED QUERIES</h3>
                          {user}
</div></Scrollbars>
                </Grid.Column>


             </Grid.Row>
          </Grid>
</div>
);
}
}
