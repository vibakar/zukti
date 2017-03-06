import React from 'react';
import {Feed, Image} from 'semantic-ui-react';
import './chatcontainerstyle.css';
import Cookie from 'react-cookie';

export default class AssistantView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      if(this.props.userMessage === 'nil')
      {
        return (
        <Feed id='assistantView'>
          <Feed.Event>
            <Feed.Content>
              <Feed.Extra text>
                  Hi! I'm Zukti and I'll try to answer your queries on {Cookie.load('domain')}.
                <br/>Shall we get started?
              </Feed.Extra>
            </Feed.Content>
         </Feed.Event>
        </Feed>
      );
      }
        return (
            <Feed id='assistantView'>
                <Feed.Event>
                    <Image avatar src={this.props.profilePicture} />
                    <Feed.Content>
                        <Feed.Summary date={this.props.msgDate}
                          user={this.props.userName} style={{marginLeft: '15px'}}/>
                        <Feed.Extra text style={{marginLeft: '15px'}}>
                            {this.props.userMessage}
                        </Feed.Extra>
                        <Feed.Meta/>
                    </Feed.Content>
                </Feed.Event>
            </Feed>

        );
    }
}
