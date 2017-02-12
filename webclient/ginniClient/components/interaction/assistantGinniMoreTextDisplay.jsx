import React from 'react';
import {Feed, Icon, Label} from 'semantic-ui-react';
import {Popup, Comment} from 'semantic-ui-react';
import Axios from 'axios';
import AssistantGinniOptions from './assistantGinniOptions';
export default class AssistantGinniMoreTextView extends React.Component {
    // props validation
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/geniebot.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={new Date().toLocaleString()} user='Genie'/>
                        <Feed.Extra text>
                            {this.props.textValue}
                        </Feed.Extra>
                        <Feed.Extra>
                        </Feed.Extra>
                      <AssistantGinniOptions question={this.props.question} type='text' value={this.props.textValue}/>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}