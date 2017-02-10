import React from 'react';
import {Feed, Icon, Label} from 'semantic-ui-react';
import {Popup, Comment} from 'semantic-ui-react';
import Axios from 'axios';
import UnfurlLink from './UnfurlLink';
import AssistantGinniOptions from './AssistantGinniOptions';
export default class AssistantGinniMoreBlogsView extends React.Component {
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
                        <Feed.Extra images>
                            <UnfurlLink url={this.props.value} />
                        </Feed.Extra>
                            <AssistantGinniOptions question={this.props.question} type='blog' value={this.props.value}/>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
