import React from 'react';
import {Feed, Image} from 'semantic-ui-react';
import './chatcontainerstyle.css';
import Cookie from 'react-cookie';

export default class AssistantView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      let profilepicture = Cookie.load("profilepicture");
        return (
            <Feed id='assistantView'>
                <Feed.Event>
                    <Feed.Label><Image avatar src={require('../../../../webserver/images/'+profilepicture)}/></Feed.Label>
                    <Feed.Content>
                        <Feed.Summary date={this.props.msgDate} user={this.props.userName}/>
                        <Feed.Extra text>
                            {this.props.userMessage}
                        </Feed.Extra>
                        <Feed.Meta></Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>

        );
    }
}
