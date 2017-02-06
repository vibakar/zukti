import React from 'react'
import {Feed, Icon,Grid,Card,Divider} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';
export default class Notificationfeed extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
        return (
          <div style={{backgroundImage:"url('../../images/background.jpg')",height:'fixed'}}>
              <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={13}>
                    <Feed>
              <Feed.Event>
                <Feed.Label image='../../images/user.png'/>
                <Feed.Content>
                <Feed.Summary date={this.props.date} user='Genie'/>
                <Feed.Content>
                    <Feed.Summary>
                        <Feed.Extra text>
                        <h3>Added  {this.props.type}</h3>
                        </Feed.Extra>
                    </Feed.Summary>
                    </Feed.Content>
                    <Feed.Extra text>
                      <h4>{this.props.feed}</h4>
                    </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            </Feed>
              </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider/>

                </div>
        );
    }
}
