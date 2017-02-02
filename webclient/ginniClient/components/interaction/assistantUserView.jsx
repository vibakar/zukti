
import React from 'react';
import {Feed, Icon} from 'semantic-ui-react';
import './chatcontainerstyle.css';

export default class AssistantView extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Feed id='assistantView'>
                <Feed.Event>
                    <Feed.Label image='https://chapters.theiia.org/northwest-ohio/About/ChapterOfficers/Larounis,%20John.png'/>
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
