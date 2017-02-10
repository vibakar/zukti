import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'semantic-ui-react';
import Axios from 'axios';
import Cookie from 'react-cookie';
import AssistantGinniMixedReply from './assistantGinniMixedReply';
import AssistantGinniPlainText from './assistantGinniPlainText';
import LoadingDots from './loadingDots';
import Config from '../../../../config/url';
export default class InputUserMesaage extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(e) {
        let socket = io();
        socket.emit('newQuery', {i: 1});
        e.preventDefault();
        let message = {};
        let ginniReply = [];
        message.value = ReactDOM.findDOMNode(this.refs.userInput).value;
        message.time = new Date().toLocaleString();
        this.props.handlerUserReply(message);
        ReactDOM.findDOMNode(this.refs.userInput).value = ''
        let url = Config.url + '/question/askQuestion';
        this.props.handleGinniReply([<LoadingDots/>]);
        Axios.post(url, {
            username: this.props.username,
            question: message
        }).then((response) => {
          console.log(response);
            if (response.data) {
                if(!response.data.isUnAnswered){
                      ginniReply.push(<AssistantGinniMixedReply handleGinniReply={this.props.handleGinniReply} question={message.value} data={response.data.answerObj}/>);
                }
                else{
                  response.data.answerObj.forEach((reply)=>{
                    ginniReply.push(<AssistantGinniPlainText value={reply.value}/> );
                  })
                }
            }
            this.props.handleGinniReply(ginniReply,true);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleUserInput}>
                <input autoComplete="off" type='text' id='textinput' name='userInput' ref='userInput' placeholder='Enter Your Queries'/>
            </Form>
        )
    }
}
