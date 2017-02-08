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
                      <Card fluid style={{height:'80px'}}>
                        <Grid>
                          <Grid.Column width={2}>
                            <Grid.Row></Grid.Row>
                            <Grid.Row></Grid.Row>
                            <Label as='a'>
     <Image avatar src={require('../../../../webserver/images/defultImage.jpg')}/></Label></Grid.Column>
                          <Grid.Column width={7}>
                            {newsdata.username}<br/><br/>
                            <Icon name='help circle' style={{color:'teal'}}/>{newsdata.question}<br/>
                          </Grid.Column>
                          <Grid.Column width={7} style={{color:'teal'}}>
                            <br/>Keyword:{newsdata.keywords}<br/>
                            intent:{newsdata.intents}
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
    backgroundImage: 'url("../../images/wall.jpg")',marginTop: '1%',
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
