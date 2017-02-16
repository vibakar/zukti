import React from 'react';
import {Feed} from 'semantic-ui-react';
import CodeAssistantConfig from '../../../config/codeAssistant.json'
import './chatcontainerstyle.css';

export default class AssistantView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Feed id='assistantView'>
                <Feed.Event>
                    <Feed.Label image='../../images/geniebot.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={new Date().toLocaleString()} user={CodeAssistantConfig.name}/>
                        <Feed.Extra text>
                            {this.props.value}
                        </Feed.Extra>
                        <Feed.Meta/>
                    </Feed.Content>
                </Feed.Event>
            </Feed>

        );
    }
}
