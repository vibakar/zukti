import React from 'react';
import ReactDOM from 'react-dom';
import AssistantUserView from './assistantUserView';
import {Scrollbars} from 'react-custom-scrollbars';
import InputUserMessage from './inputUserMessage';
import {Menu, Icon, Input} from 'semantic-ui-react';
import Cookie from 'react-cookie';
import Axios from 'axios';
import AssistantGinniMixedReply from './assistantGinniMixedReply';
import Config from '../../../../config/url';
import './chatcontainerstyle.css';
export default class AssistantChatContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: [],
            username:'User'
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
        if(username){
          this.state.username=username;
        }
        console.log(username);
        var len = this.state.messages.length - 2;
        const node = ReactDOM.findDOMNode(this['_div' + len]);
        if (node) {
            node.scrollIntoView();
        }

    }

    componentDidUpdate() {
        // Scroll as new elements come along
        var len = this.state.messages.length - 2;
        const node = ReactDOM.findDOMNode(this['_div' + len]);
        if (node) {
            node.scrollIntoView();
        }
    }
    retriveChat(){
      let url = Config.url+'/retriveChat';
      Axios.get(url).
      then((response)=>{
        console.log(response.data);
        return(response.data);
      }).
      catch((err)=>{
        alert('ERROR IN FETCHING CHATS')
        console.log(err);
      });
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
                <InputUserMessage handlerUserReply={this.pushUserMessages} handleGinniReply={this.pushGinniMessages}/>
            </div>
        );
    }
}
