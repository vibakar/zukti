import React from 'react'
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

export default class Info extends React.Component {
    render() {
        return (
            <Grid style={{
                width: '95%',
                margin: 'auto',
               'background-color':'#f3f2f2'
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
                                                          <a>5000</a>
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
                                                          <a>1890</a>
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
        )
    }
}
