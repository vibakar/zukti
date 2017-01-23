import React from 'react';
import {Feed, Icon} from 'semantic-ui-react';
import {Menu, Segment, Card, Popup, Comment} from 'semantic-ui-react'
export default class AssistantGinniView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'text'
        };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, {name}) {
        this.setState({activeItem: name});
    }
    render() {
        let content;
        switch (Math.floor(Math.random() * (2 - 1 + 1)) + 1) {
            case 1:
                {
                    content = <Feed.Extra text>
                        Hey buddy!! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Feed.Extra>
                    break;
                }
            case 2:
                {
                    content = <div >
                        <Feed.Extra text>
                            Hey buddy!! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Feed.Extra>

                    </div>
                    break;
                }
            case 3:
                {}

        }
        return (

            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/user2.jpg'/>
                    <Feed.Content id='geniestyle'>
                        <Feed.Summary date={new Date().toLocaleString()} user='Genie'/> {content}
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
