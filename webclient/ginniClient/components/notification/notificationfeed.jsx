import React from 'react'
import {Feed, Icon,Grid,Card} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';
export default class Notificationfeed extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
        return (
          <div style={{ backgroundImage: "url('../../images/wall.jpg')", marginTop: '1%',height:'100%'}}>
              <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={10}>
                <Card fluid color="black">
                  <Grid divided="vertically">
                <Grid.Row columns={3}>
                  <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={13}>
                    <Feed>
              <Feed.Event>
                <Feed.Label image='http://semantic-ui.com/images/avatar/small/joe.jpg' position="center"/>
                <Feed.Content>
                  <Feed.User><h2>Arpit</h2></Feed.User>
                <Feed.Summary date={this.props.date}/>
                    <Feed.Summary>
                        <Feed.Extra text>
                        <h3>Added  {this.props.type}</h3>
                        </Feed.Extra>
                    </Feed.Summary>
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
         </Card>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
          </Grid.Row>

          </Grid>
      </div>
        );
    }
}
