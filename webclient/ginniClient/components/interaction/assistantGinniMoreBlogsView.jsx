import React from 'react';
import {Feed} from 'semantic-ui-react';
import UnfurlLink from './unfurlLink';
import AssistantGinniOptions from './assistantGinniOptions';
import CodeAssistant from '../../../Multi_Lingual/Wordings.json';

export default class AssistantGinniMoreBlogsView extends React.Component {
    // props validation
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Feed id="ginniview">
              <Feed.Event>
                  <Feed.Content id = 'ginniviewKeyword'>
                      <Feed.Summary><UnfurlLink url={this.props.value} /></Feed.Summary>
                          <AssistantGinniOptions question={this.props.question}
                            type='blog' value={this.props.value}/>
                            <Feed.Extra id='assistantViewUserDate'>
                                {new Date().toLocaleString()}
                            </Feed.Extra>
                  </Feed.Content>
              </Feed.Event>
          </Feed>
        );
    }
}
