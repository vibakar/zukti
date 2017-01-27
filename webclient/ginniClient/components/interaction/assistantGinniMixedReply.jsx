import React from 'react';
import {Feed, Icon, Label} from 'semantic-ui-react';
import {Popup, Comment} from 'semantic-ui-react';
import AssistantGinniUrlDisplay from './assistantGinniUrlDisplay';
import AssistantGinniVideoDisplay from './assistantGinniVideoDisplay';

export default class AssistantGinniMixedReply extends React.Component {
    // props validation
    static propTypes = {
        handleGinniReply: React.PropTypes.func.isRequired,
        data: React.PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        // function to show videos url feteched from response
        this.displayVideoUrl = this.displayVideoUrl.bind(this);
        this.displayBlogUrl = this.displayBlogUrl.bind(this);
    }
    displayVideoUrl() {
        let ginniReply = [<AssistantGinniVideoDisplay message='Here are some videos' url={this.props.data.videoUrl}/>];
        this.props.handleGinniReply(ginniReply);
    }
    displayBlogUrl() {
        let ginniReply = [<AssistantGinniUrlDisplay message='Here are some blogs' url={this.props.data.blogUrl}/>];
        this.props.handleGinniReply(ginniReply);
    }
    render() {
        let text = this.props.data.textAnswer;

        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/user2.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={new Date().toLocaleString()} user='Genie'/>
                        <Feed.Extra text>
                            {text}
                        </Feed.Extra>
                        <Feed.Extra>
                            <Label.Group color='blue'>
                                <Label onClick={this.displayVideoUrl}>Videos</Label>
                                <Label onClick={this.displayBlogUrl}>Blogs</Label>
                            </Label.Group>
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
