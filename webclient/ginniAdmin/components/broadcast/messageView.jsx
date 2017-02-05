import React from 'react'
import {Feed, Icon} from 'semantic-ui-react'

export default class MessageView extends React.Component {
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
                            <Feed.User>{this.props.username}</Feed.User>
                            <Feed.Date>12 jan</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra text>
                            {this.props.dispData}
                        </Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
