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
      const {open} = this.state;
        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/geniebot.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={this.props.data.time} user='Genie'/>
                        <Feed.Extra text>
                            {text}
                        </Feed.Extra>
                        <Feed.Extra>
                        </Feed.Extra>
                      <AssistantGinniOptions type='text' value={this.props.text}/>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
