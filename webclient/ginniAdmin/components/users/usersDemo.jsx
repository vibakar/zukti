import React from 'react';
import {
    List,
    Image,
    Accordion,
    Header,
    Card,
    Rating,
    Grid,
    Comment,
    Form
} from 'semantic-ui-react'
import DonutChart from 'react-donut-chart';
export default class UserInfo extends React.Component {
    constructor()
    {
        super()
        this.state = {
            activeIndex: 0
        }
    }
    handleTitleClick = (e, i) => this.setState({
        activeIndex: this.state.activeIndex === i
            ? -1
            : i
    })
    render() {
        const user = {
            width: '600px',
            height: '200px'
        };
        const {activeIndex} = this.state;
        return (
            <Grid style={{'background-color':'#f3f2f2',width: '95%',
            margin: 'auto'}} >
                <Grid.Column width={4}></Grid.Column>
                <Grid.Column width={12}>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <h1>User Information</h1>
                        <Accordion onTitleClick={this.handleTitleClick}>
                            <Accordion.Title>
                                <Header>
                                    <Image avatar src='http://semantic-ui.com/images/avatar2/small/rachel.png'/>
                                    Rachel
                                </Header>
                            </Accordion.Title>
                            <Accordion.Content>
                                <Grid divided='vertically'>
                                    <Grid.Row>
                                        <Grid.Column width={5}>
                                            <Header>
                                                <Image src='http://semantic-ui.com/images/avatar2/small/rachel.png' size='small'/>
                                                <h1>Rachel</h1>
                                                <Rating icon='heart' defaultRating={4} maxRating={5}/>
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <h3>Joined on :25/12/2016</h3>
                                            <h3>Recent Log in:Today</h3>
                                            <h3>No of Queries :400</h3>
                                            <h3>Bots:React</h3>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <div>
                                                <Accordion onTitleClick={this.handleTitleClick}>
                                                    <Accordion.Title>
                                                        <Header as='h3' dividing>Queries</Header>
                                                    </Accordion.Title>
                                                    <Accordion.Content>
                                                        <Comment.Group>
                                                            <Comment>
                                                                <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg'/>
                                                                <Comment.Content>
                                                                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                                                    <Comment.Metadata>
                                                                        <div>Yesterday at 12:30AM</div>
                                                                    </Comment.Metadata>
                                                                    <Comment.Text>
                                                                        <p>This has been very useful for my research. Thanks as well!</p>
                                                                    </Comment.Text>
                                                                    <Comment.Actions>
                                                                        <Comment.Action>Save</Comment.Action>
                                                                    </Comment.Actions>
                                                                </Comment.Content>
                                                                <Comment.Group>
                                                                    <Comment>
                                                                        <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg'/>
                                                                        <Comment.Content>
                                                                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                                                            <Comment.Metadata>
                                                                                <div>Just now</div>
                                                                            </Comment.Metadata>
                                                                            <Comment.Text>
                                                                                Elliot you are always so right :slightly_smiling_face:
                                                                            </Comment.Text>
                                                                            <Comment.Actions>
                                                                                <Comment.Action>Save</Comment.Action>
                                                                            </Comment.Actions>
                                                                        </Comment.Content>
                                                                    </Comment>
                                                                </Comment.Group>
                                                            </Comment>
                                                        </Comment.Group>
                                                    </Accordion.Content>
                                                </Accordion>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row >
                                        <Grid.Column width={6}>
                                            <h3>Usage Of Bots</h3>
                                            <DonutChart data={[
                                                {
                                                    label: 'Month',
                                                    value: 45
                                                }, {
                                                    label: 'Week',
                                                    value: 25
                                                }, {
                                                    label: 'Day',
                                                    value: 30
                                                }
                                            ]} width='500'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Accordion.Content>
                        </Accordion>
                        <Accordion onTitleClick={this.handleTitleClick}>
                            <Accordion.Title>
                                <Header>
                                    <Image avatar src='http://semantic-ui.com/images/avatar2/small/lindsay.png'/>Lindsay
                                </Header>
                            </Accordion.Title>
                            <Accordion.Content>
                                <Grid divided='vertically'>
                                    <Grid.Row>
                                        <Grid.Column width={5}>
                                            <Header>
                                                <Image src='http://semantic-ui.com/images/avatar2/small/lindsay.png' size='small'/>
                                                <h1>Lindsay</h1>
                                                <Rating icon='heart' defaultRating={4} maxRating={5}/>
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <h3>Joined on :02/01/2016</h3>
                                            <h3>Recent Log in:Today</h3>
                                            <h3>No of Queries :40</h3>
                                            <h3>Bots:React</h3>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <div>
                                                <Accordion onTitleClick={this.handleTitleClick}>
                                                    <Accordion.Title>
                                                        <Header>
                                                            <Header as='h3' dividing>Queries</Header>
                                                        </Header>
                                                    </Accordion.Title>
                                                    <Accordion.Content>
                                                        <Comment.Group>
                                                            <Comment>
                                                                <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg'/>
                                                                <Comment.Content>
                                                                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                                                    <Comment.Metadata>
                                                                        <div>Yesterday at 12:30AM</div>
                                                                    </Comment.Metadata>
                                                                    <Comment.Text>
                                                                        <p>This has been very useful for my research. Thanks as well!</p>
                                                                    </Comment.Text>
                                                                    <Comment.Actions>
                                                                        <Comment.Action>Save</Comment.Action>
                                                                    </Comment.Actions>
                                                                </Comment.Content>
                                                                <Comment.Group>
                                                                    <Comment>
                                                                        <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg'/>
                                                                        <Comment.Content>
                                                                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                                                            <Comment.Metadata>
                                                                                <div>Just now</div>
                                                                            </Comment.Metadata>
                                                                            <Comment.Text>
                                                                                Elliot you are always so right :slightly_smiling_face:
                                                                            </Comment.Text>
                                                                            <Comment.Actions>
                                                                                <Comment.Action>Save</Comment.Action>
                                                                            </Comment.Actions>
                                                                        </Comment.Content>
                                                                    </Comment>
                                                                </Comment.Group>
                                                            </Comment>
                                                        </Comment.Group>
                                                    </Accordion.Content>
                                                </Accordion>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row >
                                        <Grid.Column width={6}>
                                            <h3>Usage Of Bots</h3>
                                            <DonutChart data={[
                                                {
                                                    label: 'Month',
                                                    value: 45
                                                }, {
                                                    label: 'Week',
                                                    value: 25
                                                }, {
                                                    label: 'Day',
                                                    value: 30
                                                }
                                            ]} width='550'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Accordion.Content>
                        </Accordion>
                        <Accordion onTitleClick={this.handleTitleClick}>
                            <Accordion.Title>
                                <Header>
                                    <Image avatar src='http://semantic-ui.com/images/avatar2/small/matthew.png'/>Matthew
                                </Header>
                            </Accordion.Title>
                            <Accordion.Content>
                                <Grid divided='vertically'>
                                    <Grid.Row>
                                        <Grid.Column width={5}>
                                            <Header>
                                                <Image src='http://semantic-ui.com/images/avatar2/small/matthew.png' size='small'/>
                                                <h1>Matthew</h1>
                                                <Rating icon='heart' defaultRating={4} maxRating={5}/>
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <h3>Joined on :08/11/2016</h3>
                                            <h3>Recent Log in:Today</h3>
                                            <h3>No of Queries :123</h3>
                                            <h3>Bots:React</h3>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <div>
                                                <Accordion onTitleClick={this.handleTitleClick}>
                                                    <Accordion.Title>
                                                        <Header>
                                                            <Header as='h3' dividing>Queries</Header>
                                                        </Header>
                                                    </Accordion.Title>
                                                    <Accordion.Content>
                                                        <Comment.Group>
                                                            <Comment>
                                                                <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg'/>
                                                                <Comment.Content>
                                                                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                                                    <Comment.Metadata>
                                                                        <div>Yesterday at 12:30AM</div>
                                                                    </Comment.Metadata>
                                                                    <Comment.Text>
                                                                        <p>This has been very useful for my research. Thanks as well!</p>
                                                                    </Comment.Text>
                                                                    <Comment.Actions>
                                                                        <Comment.Action>Save</Comment.Action>
                                                                    </Comment.Actions>
                                                                </Comment.Content>
                                                                <Comment.Group>
                                                                    <Comment>
                                                                        <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg'/>
                                                                        <Comment.Content>
                                                                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                                                            <Comment.Metadata>
                                                                                <div>Just now</div>
                                                                            </Comment.Metadata>
                                                                            <Comment.Text>
                                                                                Elliot you are always so right :slightly_smiling_face:
                                                                            </Comment.Text>
                                                                            <Comment.Actions>
                                                                                <Comment.Action>Save</Comment.Action>
                                                                            </Comment.Actions>
                                                                        </Comment.Content>
                                                                    </Comment>
                                                                </Comment.Group>
                                                            </Comment>
                                                        </Comment.Group>
                                                    </Accordion.Content>
                                                </Accordion>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row >
                                        <Grid.Column width={6}>
                                            <h3>Usage Of Bots</h3>
                                            <DonutChart data={[
                                                {
                                                    label: 'Month',
                                                    value: 45
                                                }, {
                                                    label: 'Week',
                                                    value: 25
                                                }, {
                                                    label: 'Day',
                                                    value: 30
                                                }
                                            ]} width='550'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Accordion.Content>
                        </Accordion>
                        <Accordion onTitleClick={this.handleTitleClick}>
                            <Accordion.Title>
                                <Header>
                                    <Image avatar src='http://semantic-ui.com/images/avatar2/small/matthew.png'/>Jenny Richard
                                </Header>
                            </Accordion.Title>
                            <Accordion.Content>
                                <Grid divided='vertically'>
                                    <Grid.Row>
                                        <Grid.Column width={5}>
                                            <Header>
                                                <Image src='http://semantic-ui.com/images/avatar2/small/matthew.png' size='small'/>
                                                <h1>Jenny Richard</h1>
                                                <Rating icon='heart' defaultRating={4} maxRating={5}/>
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <h3>Joined on :16/06/2016</h3>
                                            <h3>Recent Log in:Today</h3>
                                            <h3>No of Queries :400</h3>
                                            <h3>Bots:React</h3>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <div>
                                                <Accordion onTitleClick={this.handleTitleClick}>
                                                    <Accordion.Title>
                                                        <Header>
                                                            <Header as='h3' dividing>Queries</Header>
                                                        </Header>
                                                    </Accordion.Title>
                                                    <Accordion.Content>
                                                        <Comment.Group>
                                                            <Comment>
                                                                <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg'/>
                                                                <Comment.Content>
                                                                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                                                    <Comment.Metadata>
                                                                        <div>Yesterday at 12:30AM</div>
                                                                    </Comment.Metadata>
                                                                    <Comment.Text>
                                                                        <p>This has been very useful for my research. Thanks as well!</p>
                                                                    </Comment.Text>
                                                                    <Comment.Actions>
                                                                        <Comment.Action>Save</Comment.Action>
                                                                    </Comment.Actions>
                                                                </Comment.Content>
                                                                <Comment.Group>
                                                                    <Comment>
                                                                        <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg'/>
                                                                        <Comment.Content>
                                                                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                                                            <Comment.Metadata>
                                                                                <div>Just now</div>
                                                                            </Comment.Metadata>
                                                                            <Comment.Text>
                                                                                Elliot you are always so right :slightly_smiling_face:
                                                                            </Comment.Text>
                                                                            <Comment.Actions>
                                                                                <Comment.Action>Save</Comment.Action>
                                                                            </Comment.Actions>
                                                                        </Comment.Content>
                                                                    </Comment>
                                                                </Comment.Group>
                                                            </Comment>
                                                        </Comment.Group>
                                                    </Accordion.Content>
                                                </Accordion>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row >
                                        <Grid.Column width={6}>
                                            <h3>Usage Of Bots</h3>
                                            <DonutChart data={[
                                                {
                                                    label: 'Month',
                                                    value: 45
                                                }, {
                                                    label: 'Week',
                                                    value: 25
                                                }, {
                                                    label: 'Day',
                                                    value: 30
                                                }
                                            ]} width='550'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Accordion.Content>
                        </Accordion>
                        <Accordion onTitleClick={this.handleTitleClick}>
                            <Accordion.Title>
                                <Header>
                                    <Image avatar src='http://semantic-ui.com/images/avatar2/small/rachel.png'/>
                                    Veronika Ossi
                                </Header>
                            </Accordion.Title>
                            <Accordion.Content>
                                <Grid divided='vertically'>
                                    <Grid.Row>
                                        <Grid.Column width={5}>
                                            <Header>
                                                <Image src='http://semantic-ui.com/images/avatar2/small/rachel.png' size='small'/>
                                                <h1>Veronika Ossi</h1>
                                                <Rating icon='heart' defaultRating={4} maxRating={5}/>
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column width={5}>
                                            <h3>Joined on :25/12/2016</h3>
                                            <h3>Recent Log in:Today</h3>
                                            <h3>No of Queries :400</h3>
                                            <h3>Bots:React</h3>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <div>
                                                <Accordion onTitleClick={this.handleTitleClick}>
                                                    <Accordion.Title>
                                                        <Header>
                                                            <Header as='h3' dividing>Queries</Header>
                                                        </Header>
                                                    </Accordion.Title>
                                                    <Accordion.Content>
                                                        <Comment.Group>
                                                            <Comment>
                                                                <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg'/>
                                                                <Comment.Content>
                                                                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                                                    <Comment.Metadata>
                                                                        <div>Yesterday at 12:30AM</div>
                                                                    </Comment.Metadata>
                                                                    <Comment.Text>
                                                                        <p>This has been very useful for my research. Thanks as well!</p>
                                                                    </Comment.Text>
                                                                    <Comment.Actions>
                                                                        <Comment.Action>Save</Comment.Action>
                                                                    </Comment.Actions>
                                                                </Comment.Content>
                                                                <Comment.Group>
                                                                    <Comment>
                                                                        <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg'/>
                                                                        <Comment.Content>
                                                                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                                                            <Comment.Metadata>
                                                                                <div>Just now</div>
                                                                            </Comment.Metadata>
                                                                            <Comment.Text>
                                                                                Elliot you are always so right :slightly_smiling_face:
                                                                            </Comment.Text>
                                                                            <Comment.Actions>
                                                                                <Comment.Action>Save</Comment.Action>
                                                                            </Comment.Actions>
                                                                        </Comment.Content>
                                                                    </Comment>
                                                                </Comment.Group>
                                                            </Comment>
                                                        </Comment.Group>
                                                    </Accordion.Content>
                                                </Accordion>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row >
                                        <Grid.Column width={6}>
                                            <h2>Usage Of Bots</h2>
                                            <DonutChart data={[
                                                {
                                                    label: 'Month',
                                                    value: 45
                                                }, {
                                                    label: 'Week',
                                                    value: 25
                                                }, {
                                                    label: 'Day',
                                                    value: 30
                                                }
                                            ]} width='550'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Accordion.Content>
                        </Accordion>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        );
    }
}
