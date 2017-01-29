import React from 'react';
import {Grid, Button, Icon, Card} from 'semantic-ui-react';
import IntentDropDown from './IntentDropDown';
import InputNewSameAsIntent from './inputNewSameAsIntent';
import SameAsIntents from './sameAsIntents';
export default class TrainBot extends React.Component {
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
                    <Grid.Row></Grid.Row>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={8}>
                            <h2>Add Intent</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={6}>
                            <IntentDropDown handlerForSameAsIntents={this.setSameAsIntents}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={6}>
                            <InputNewSameAsIntent baseIntent={this.state.baseIntent} handlerAddNewIntent={this.addNewSameAsIntent}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={5}></Grid.Column>
                        <Grid.Column width={3}>
                            <Button color="blue" fluid>
                                <Icon name='plus circle'>Add
                                </Icon>
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={6}>
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
                </Grid>
            </div>
        );
    }
}
