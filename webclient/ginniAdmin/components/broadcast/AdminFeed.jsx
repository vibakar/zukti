
import React from 'react'
import {Feed, Icon, Card,Grid} from 'semantic-ui-react'

export default class AdminFeed extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
          <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={10}>
                <Card fluid color="black">
                  <Grid divided="vertically">
                <Grid.Row columns={3}>
                      <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={13}>
                    <Grid.Row></Grid.Row>
            <Feed>
              <Feed.Event>
                <Feed.Label image='http://semantic-ui.com/images/avatar/small/joe.jpg' position="center"/>
                <Feed.Content>
                <Feed.Summary date={new Date().toLocaleString()}/>
                    <Feed.Summary  >
                        <a>{this.props.name}</a>
                        <Feed.Extra text>
                          <h3>  Added {this.props.type}</h3>
                        </Feed.Extra>
                    </Feed.Summary>
                    <Feed.Extra text>
                      <h4>  {this.props.text}</h4>
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
          );
    }
}
