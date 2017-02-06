import React from 'react';
import ReactDOM from 'react-dom';
import {Scrollbars} from 'react-custom-scrollbars';
import InputUserMessage from './inputUserMessage';
import {Menu, Icon, Input, Dimmer, Loader} from 'semantic-ui-react';
import Cookie from 'react-cookie';
import Axios from 'axios';
import AssistantGinniMixedReply from './assistantGinniMixedReply';
import AssistantUserView from './assistantUserView';
import Config from '../../../../config/url';
import './chatcontainerstyle.css';
export default class AssistantChatContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: [],
            username: 'User',
            loaderActive: true
        };
        this.retriveChat = this.retriveChat.bind(this);
        // to display ginni messages
        this.pushGinniMessages = this.pushGinniMessages.bind(this);
        // to display user messages
        this.pushUserMessages = this.pushUserMessages.bind(this);
    }
    componentDidMount() {
        // Scroll to the bottom on initialization
        let username = Cookie.load('username');
        if (username) {
            this.state.username = username;
        }
        this.retriveChat();
    }
    componentDidUpdate() {
        // Scroll as new elements come along
        console.log('IN componentDidUpdate');
        var len = this.state.messages.length - 1;
        console.log(len);
        const node = ReactDOM.findDOMNode(this['_div' + len]);
        console.log(node);
        if (node) {
            node.scrollIntoView();
        }
    }
    retriveChat() {
        let url = Config.url + '/retriveChat';
        Axios.get(url).then((response) => {
            console.log(response);
            if(response.data){
              console.log('Inside then');
              response.data.chats.forEach((chat) => {
                let length = this.state.messages.length;
                this.state.messages.push(
                  <div ref={(ref) => this['_div' + length] = ref} key={length}>
                    <AssistantUserView msgDate={chat.question.time} userName={this.state.username} userMessage={chat.question.value}/>
                  </div>
                );
                chat.resultArray.forEach((reply) => {
                  let length = this.state.messages.length;
                  this.state.messages.push(
                    <div ref={(ref) => this['_div' + length] = ref} key={length}>
                      <AssistantGinniMixedReply data={reply} handleGinniReply={this.pushGinniMessages}/>
                    </div>
                  );
                });
              });
            }
            this.setState({messages: this.state.messages, loaderActive: false});
        }).catch((err) => {
            console.log(err);
            alert('ERROR IN FETCHING CHATS')
        });
    }
    pushGinniMessages(ginniReply) {
        ginniReply.forEach((reply) => {
            let length = this.state.messages.length;
            let displayItem = (
                <div ref={(ref) => this['_div' + length] = ref} key={length}>
                    {reply}
                </div >
            );
            this.state.messages.push(displayItem);
        });
        this.setState({messages: this.state.messages});
    }
    pushUserMessages(message) {
        let length = this.state.messages.length;
        let userMessageDisplay = (
            <div ref={(ref) => this['_div' + length] = ref} key={length}>
                <AssistantUserView msgDate={message.time} userName={this.state.username} userMessage={message.value}/>
            </div>
        );
        this.state.messages.push(userMessageDisplay);
        this.setState({messages: this.state.messages});
    }

    render() {

        return (
            <div className='formstyle' style={{
                backgroundImage: "url('http://exploretheme.com/wp-content/uploads/2015/03/restaurant-icons.jpg')",
                height: '100%'
            }}>
                <Dimmer active={this.state.loaderActive} inverted>
                    <Loader size='huge'>Loading previous chat history</Loader>
                </Dimmer>
                <Menu secondary>
                    <Menu.Item secondary position='right'/>
                    <Menu.Item position='left'>
                        <Input transparent className='icon' icon='search' placeholder='Search your content' focus/>
                    </Menu.Item>
                </Menu>
                <Scrollbars id='ginni' renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
                    display: "none",
                    position: "right",
                    minHeight: "516px"
                }}/>} autoHeight autoHeightMin={508}>
                    <div id='messagechat'>
                        {this.state.messages}
                    </div>
                </Scrollbars>
                <InputUserMessage username={this.state.username}  handlerUserReply={this.pushUserMessages} handleGinniReply={this.pushGinniMessages}/>
            </div>
        );
    }
}
