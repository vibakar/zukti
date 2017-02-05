import React from 'react'
import {Feed, Icon,Grid,Card,Divider} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';
export default class Notificationfeed extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg'/>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>{this.props.msgSender}</Feed.User>
                            <Feed.Date>{this.props.date}</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra>
                            {this.props.dispData}
                        </Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
