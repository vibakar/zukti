import React from 'react';
import {Feed, Image} from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import './chatcontainerstyle.css';

export default class AssistantView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      console.log('inside plain text');
        return (
            <Feed id='assistantView'>
                <Feed.Event>
                    <Feed.Label  image='../../images/geniebot.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={new Date().toLocaleString()}  user='Ginni'/>
                        <Feed.Extra >
                            <ReactPlayer url={this.props.url} playing={false} controls={true}/>
                        </Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            </Feed>

        );
    }
}