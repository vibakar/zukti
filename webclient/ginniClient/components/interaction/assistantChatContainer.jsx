import React from 'react';
import ReactDOM from 'react-dom';
import AssistantUserView from './assistantUserView';
import {Scrollbars} from 'react-custom-scrollbars';
import InputUserMessage from './inputUserMessage';
import './chatcontainerstyle.css';
export default class AssistantChatContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: []
        };
        // to display ginni messages
        this.pushGinniMessages = this.pushGinniMessages.bind(this);
        // to display user messages
        this.pushUserMessages = this.pushUserMessages.bind(this);
    }
    componentDidMount() {

        // Scroll to the bottom on initialization
        var len = this.state.messages.length - 1;
        const node = ReactDOM.findDOMNode(this['_div' + len]);
        if (node) {
            node.scrollIntoView();
        }
    }

    componentDidUpdate() {
        // Scroll as new elements come along
        var len = this.state.messages.length - 1;
        const node = ReactDOM.findDOMNode(this['_div' + len]);
        if (node) {
            node.scrollIntoView();
        }
    }
    pushGinniMessages(ginniReply) {

        ginniReply.forEach((reply) => {
          let index = this.state.messages.length - 1;
            let displayItem = (
                <div ref={(ref) => this['_div' + index] = ref} key={index}>
                    {reply}
                </div>
            );
            this.state.messages.push(displayItem);
        });
        this.setState({messages: this.state.messages});
    }
    pushUserMessages(message) {
        console.log(message);
        let index = this.state.messages.length - 1;
        let userMessageDisplay = (
            <div key={index}>
                <AssistantUserView msgDate={message.date} userName={message.user} userMessage={message.value}/>
            </div>
        );
        this.state.messages.push(userMessageDisplay);
        this.setState({messages: this.state.messages});
    }

    render() {

        return (
            <div className='formstyle'>
                <h1 id='chatheading'>I Am Your Code Assistant/Genie</h1>
                <Scrollbars id='ginni' renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
                    display: "none",
                    position: "right"
                }}/>} autoHeight autoHeightMin={400}>
                    {this.state.messages}
                </Scrollbars>
                <InputUserMessage handlerUserReply={this.pushUserMessages} handleGinniReply={this.pushGinniMessages}/>
            </div>
        );
    }
}
