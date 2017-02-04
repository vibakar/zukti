import React from 'react'
import {Feed, Icon,Grid,Card,Divider} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';
export default class Notificationfeed extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
        return (
          <div style={{ backgroundImage: "url('http://supernovathemes.com/wp-content/themes/supernovathemes/images/bg/b18.png')", marginTop: '1%',height:'100%'}}>
              <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={12}>
                  <Grid divided="vertically">
                <Grid.Row columns={3}>
                  <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={13}>
                    <Grid.Row></Grid.Row>
                    <Feed>
              <Feed.Event>
                <Feed.Label image='http://semantic-ui.com/images/avatar/small/joe.jpg'/>
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
                    </Grid.Column>
            <Grid.Column width={3}></Grid.Column>

         </Grid.Row>
  <Divider/>
          </Grid>
                </div>
        );
    }
}
