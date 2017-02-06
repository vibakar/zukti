import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'semantic-ui-react';
import Axios from 'axios';
import Cookie from 'react-cookie';
import AssistantGinniMixedReply from './assistantGinniMixedReply';
import Config from '../../../../config/url';
export default class InputUserMesaage extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(e) {
        e.preventDefault();
        let message = {};
        let ginniReply = [];
        message.value = ReactDOM.findDOMNode(this.refs.userInput).value;
        message.time = new Date().toLocaleString();
        this.props.handlerUserReply(message);
        alert(this.props.username);
        ReactDOM.findDOMNode(this.refs.userInput).value = ''
        let url = Config.url + '/question/askQuestion';
        Axios.post(url, {username:this.props.username,question: message}).then((response) => {
            console.log(response);
            if (response.data) {
                response.data.forEach((item)=>{
                  ginniReply.push(<AssistantGinniMixedReply handleGinniReply = {
                    this.props.handleGinniReply
                  }
                  data = {
                    item
                  } />);
                })
            }
          this.props.handleGinniReply(ginniReply);
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
