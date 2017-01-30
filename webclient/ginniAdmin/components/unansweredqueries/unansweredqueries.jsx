import React from 'react';
import {Grid, Button, Icon, Card,  Accordion ,Divider} from 'semantic-ui-react';
import TrainBot from '../trainbot/trainbot.jsx';
import IntentDropDown from '../trainbot/IntentDropDown';
import InputNewSameAsIntent from '../trainbot/inputNewSameAsIntent';
export default class UnansweredQueries extends React.Component {
  constructor(props) {
      super(props);
      this.setSameAsIntents = this.setSameAsIntents.bind(this);
      this.addNewSameAsIntent = this.addNewSameAsIntent.bind(this);
      this.state = {
          sameAsIntentsDisplay: [],
          baseIntent: ''
      }
  }
  setSameAsIntents(baseIntent, intents) {
      // map sameAs intents with baseIntent
      let sameAsIntentsDisplay = intents.map((intent, index) => {
          return <SameAsIntents key={index} intent={intent}/>;
      });
      this.setState({sameAsIntentsDisplay: sameAsIntentsDisplay, baseIntent: baseIntent});
  }
  addNewSameAsIntent(intent){
    let length = this.state.baseIntent.length;
    this.state.sameAsIntentsDisplay.push(<SameAsIntents key={length} intent={intent}/>);
    this.setState({sameAsIntentsDisplay: this.state.sameAsIntentsDisplay});
  }
        render() {
        return (
          <div style={{
              backgroundImage: 'url("../../images/trainbot.jpg")',
              height: '100%'
          }}>
              <Grid >
                  <Grid.Row vertically>
                      <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={14}>
                      <Card fluid>
            <Accordion>
<Accordion.Title>
<h3>  <Icon name='dropdown' />
What is react?</h3>
</Accordion.Title>
<Accordion.Content>
  <Grid>
  <Grid.Row vertically>
    <Grid.Column width={8}>
      <Grid columns='three'>
    <Grid.Row>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={14}>
        <Grid.Row textAlign='center'>
            <Grid.Column width={1}>
                <h2>Add Intent</h2>
            </Grid.Column>
        </Grid.Row>
      <br/>
        <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={4}>
                <IntentDropDown handlerForSameAsIntents={this.setSameAsIntents}/>
            </Grid.Column>
        </Grid.Row><br/><br/>
          <Grid.Row></Grid.Row>
        <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={4}>
                <InputNewSameAsIntent baseIntent={this.state.baseIntent} handlerAddNewIntent={this.addNewSameAsIntent}/>
            </Grid.Column>
        </Grid.Row>
          <br/><br/>
        <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={4}>
                <Button color="blue" fluid circular>
                    <Icon name='plus circle'>Add
                    </Icon>
                </Button>
            </Grid.Column>
        </Grid.Row>
      <br/><br/>
        <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={4}>
                <Card fluid color="teal">
                    <Card.Content>
                        <Card.Header>
                            <label>We Have SameAs</label>
                        </Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        {this.state.sameAsIntentsDisplay}
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid.Row>
<br/><br/>
          </Grid.Column>
  <Grid.Column width={1}></Grid.Column>
</Grid.Row>
</Grid>
</Grid.Column>
<Grid.Column width={8}>
  <Grid columns='three'>
<Grid.Row>
  <Grid.Column width={1}></Grid.Column>
  <Grid.Column width={14}>
    <Grid.Row textAlign='center'>
        <Grid.Column width={1}>
            <h2>Add Concept</h2>
        </Grid.Column>
    </Grid.Row>
  <br/>
    <Grid.Row>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={4}>
            <IntentDropDown handlerForSameAsIntents={this.setSameAsIntents}/>
        </Grid.Column>
    </Grid.Row><br/><br/>
      <Grid.Row></Grid.Row>
    <Grid.Row>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={4}>
            <InputNewSameAsIntent baseIntent={this.state.baseIntent} handlerAddNewIntent={this.addNewSameAsIntent}/>
        </Grid.Column>
    </Grid.Row>
      <br/><br/>
    <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={4}>
            <Button color="green" fluid circular>
                <Icon name='plus circle'>Add
                </Icon>
            </Button>
        </Grid.Column>
    </Grid.Row>
  <br/><br/>
    <Grid.Row>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={4}>
            <Card fluid color="teal">
                <Card.Content>
                    <Card.Header>
                        <label>We Have SameAs</label>
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    {this.state.sameAsIntentsDisplay}
                </Card.Content>
            </Card>
        </Grid.Column>
    </Grid.Row>
<br/><br/>
      </Grid.Column>
<Grid.Column width={1}></Grid.Column>
</Grid.Row>
</Grid>
</Grid.Column>
</Grid.Row>
</Grid>
  </Accordion.Content>
  <Accordion.Title>
  <h3>  <Icon name='dropdown' />
  What is reactrouter?</h3>
  </Accordion.Title>
  <Accordion.Content>
    <Grid>
    <Grid.Row vertically>
      <Grid.Column width={8}>
        <Grid columns='three'>
      <Grid.Row>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={14}>
          <Grid.Row textAlign='center'>
              <Grid.Column width={1}>
                  <h2>Add Intent</h2>
              </Grid.Column>
          </Grid.Row>
        <br/>
          <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={4}>
                  <IntentDropDown handlerForSameAsIntents={this.setSameAsIntents}/>
              </Grid.Column>
          </Grid.Row><br/><br/>
            <Grid.Row></Grid.Row>
          <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={4}>
                  <InputNewSameAsIntent baseIntent={this.state.baseIntent} handlerAddNewIntent={this.addNewSameAsIntent}/>
              </Grid.Column>
          </Grid.Row>
            <br/><br/>
          <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={4}>
                  <Button color="blue" fluid>
                      <Icon name='plus circle'>Add
                      </Icon>
                  </Button>
              </Grid.Column>
          </Grid.Row>
        <br/><br/>
          <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={4}>
                  <Card fluid color="teal">
                      <Card.Content>
                          <Card.Header>
                              <label>We Have SameAs</label>
                          </Card.Header>
                      </Card.Content>
                      <Card.Content extra>
                          {this.state.sameAsIntentsDisplay}
                      </Card.Content>
                  </Card>
              </Grid.Column>
          </Grid.Row>
  <br/><br/>
            </Grid.Column>
    <Grid.Column width={1}></Grid.Column>
  </Grid.Row>
  </Grid>
  </Grid.Column>
  <Grid.Column width={8}>
    <Grid columns='three'>
  <Grid.Row>
    <Grid.Column width={1}></Grid.Column>
    <Grid.Column width={14}>
      <Grid.Row textAlign='center'>
          <Grid.Column width={1}>
              <h2>Add Concept</h2>
          </Grid.Column>
      </Grid.Row>
    <br/>
      <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={4}>
              <IntentDropDown handlerForSameAsIntents={this.setSameAsIntents}/>
          </Grid.Column>
      </Grid.Row><br/><br/>
        <Grid.Row></Grid.Row>
      <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={4}>
              <InputNewSameAsIntent baseIntent={this.state.baseIntent} handlerAddNewIntent={this.addNewSameAsIntent}/>
          </Grid.Column>
      </Grid.Row>
        <br/><br/>
      <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={4}>
              <Button color="green" fluid>
                  <Icon name='plus circle'>Add
                  </Icon>
              </Button>
          </Grid.Column>
      </Grid.Row>
    <br/><br/>
      <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={4}>
              <Card fluid color="teal">
                  <Card.Content>
                      <Card.Header>
                          <label>We Have SameAs</label>
                      </Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                      {this.state.sameAsIntentsDisplay}
                  </Card.Content>
              </Card>
          </Grid.Column>
      </Grid.Row>
  <br/><br/>
        </Grid.Column>
  <Grid.Column width={1}></Grid.Column>
  </Grid.Row>
  </Grid>
  </Grid.Column>
  </Grid.Row>
  </Grid>
    </Accordion.Content>
</Accordion>
</Card>
</Grid.Column>
    </Grid.Row>
      </Grid>
    </div>
        );
    }
}
