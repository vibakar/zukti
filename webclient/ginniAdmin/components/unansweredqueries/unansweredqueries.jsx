import React from 'react';
import axios from 'axios';
import {Grid, Button, Icon, Card,  Accordion ,Divider} from 'semantic-ui-react';
import TrainBot from '../trainbot/trainbot.jsx';
import IntentDropDown from '../trainbot/IntentDropDown';
import InputNewSameAsIntent from '../trainbot/inputNewSameAsIntent';
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
          console.log(this.state.detailNew);

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
                    <Icon name='help circle'/>{newsdata.question}<br/>
                    Keyword:{newsdata.keywords}<br/>
                    intent:{newsdata.intents}

</Grid.Column>
    </Grid.Row>
      </Grid>
    </div>
);
}.bind(this));
return(
<div style={{
    backgroundImage: 'url("../../images/wall.jpg")',
    height: '100%'
}}>
  <h4><b>
    Unanswered Queries :</b><br/><br/>
{user}
</h4>
</div>
);
}
}
