import React from 'react';
import Axios from 'axios';
import {
    Message,
    Grid,
    Card,
    Feed,
    Statistic,
    Link,
    Header,
    Label,
    Accordion
} from 'semantic-ui-react'
import GraphData from './graphData';
var count = 0;
var count1 = 0;
export default class Info extends React.Component {
    constructor() {
        super();
        this.state = {
            name: [],
            email: [],
            detail: ' ',
            userinformation: [],
            countvalue: ' ',
            countonline: ' '
        };
    }
    componentDidMount() {
        let self = this;
        count=0;
        count1=0;
        Axios({url: 'http://localhost:8080/viewall', method: 'GET'}).then(function(response) {
            let detailNew = response.data.map((fulldetail)=> {
                count++;
                self.setState({countvalue: count});
                if (fulldetail.local.loggedinStatus) {
                    count1++;
                    self.setState({countonline: count1});
                }
                return fulldetail;
            });
            this.setState({userinformation: detailNew});
        }).catch(function(err) {
            console.log(err);
        });
    }
    render() {
        return (
          <div style={{background:"url('../../images/background.jpg')"}}>
            <Grid style={{
                width: '95%',
                margin: 'auto'
            }}>
                <Grid.Row>
                    <Card.Group className='container' stackable itemsPerRow={3}>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>
                                    Total No Of Users Registered
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Statistic>
                                                    <Statistic.Value>
                                                        <i className="inverted circular teal users icon"></i>
                                                        <a>{this.state.countvalue}</a>
                                                    </Statistic.Value>
                                                    <Statistic.Label>Members</Statistic.Label>
                                                </Statistic>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card.Content>
                        </Card>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>
                                    Number of users online
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Statistic>
                                                    <Statistic.Value>
                                                        <i className="inverted circular green users icon"></i>
                                                        <a>{this.state.countonline}</a>
                                                    </Statistic.Value>
                                                    <Statistic.Label>Members</Statistic.Label>
                                                </Statistic>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card.Content>
                        </Card>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>
                                    Number of Queries Asked
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Statistic>
                                                    <Statistic.Value>
                                                        <i className="inverted circular red idea icon"></i>
                                                        <a>18900</a>
                                                    </Statistic.Value>
                                                    <Statistic.Label>Members</Statistic.Label>
                                                </Statistic>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Grid.Row>
                <Grid.Row>
                    <GraphData/>
                </Grid.Row>
            </Grid>
          </div>
        )
    }
}
