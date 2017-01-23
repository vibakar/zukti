import React from 'react';
import {Feed, Icon, Label} from 'semantic-ui-react';
import {Popup, Comment} from 'semantic-ui-react';
import AssistantGinniUrlDisplay from './assistantGinniUrlDisplay';
import AssistantGinniVideoDisplay from './assistantGinniVideoDisplay';

export default class AssistantGinniConfusedReply extends React.Component {
    // props validation
    static propTypes = {
        handleGinniReply: React.PropTypes.func.isRequired,
        data: React.PropTypes.array.isRequired
    };
    constructor(props) {
        super(props);
    }

    render() {
        let keywords= this.props.data.map((keyword)=>{
        return <Label>{keyword}</Label>;
        })
        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/user2.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={new Date().toLocaleString()} user='Genie'/>
                          <Feed.Extra>
                              <Label.Group color='blue'>
                                  {keywords}
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
