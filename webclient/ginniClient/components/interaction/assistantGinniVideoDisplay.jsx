import React from 'react';
import {Feed, Icon} from 'semantic-ui-react';
import {Popup, Comment} from 'semantic-ui-react';
import ReactPlayer from 'react-player';


export default class AssistantGinniMixedReply extends React.Component {
    render() {
        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/user2.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={new Date().toLocaleString()} user='Genie'/>
                        <Feed.Extra text>
                            {this.props.message}
                        </Feed.Extra>
                        <Feed.Extra images>
                                <ReactPlayer url={this.props.url} playing={false} controls={true}/>
                        </Feed.Extra>
                        <Feed.Meta>
                            <Popup trigger={< Icon circular name = 'flag' color = 'green' />} content='Flag' size='mini'/>
                            <Popup trigger={< Icon circular name = 'star' color = 'yellow' />} content='star this message' size='mini'/>
                            <Popup trigger={< Icon circular name = 'like outline' color = 'blue' />} content='Like' size='mini'/>
                            <Popup trigger={< Icon circular name = 'dislike outline' color = 'blue' />} content='Dislike' size='mini'/>
                            <Popup trigger={< Icon circular name = 'delete' color = 'red' />} content='Delete' size='mini'/>
                            <Comment.Action>Reply</Comment.Action>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
