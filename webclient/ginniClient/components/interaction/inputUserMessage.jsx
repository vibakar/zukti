import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'semantic-ui-react';
import Axios from 'axios';
import AssistantGinniTextReply from './assisantGinniTextReply';
import AssistantGinniMixedReply from './assistantGinniMixedReply';
import AssistantGinniKeywordReply from './assistantGinniKeywordReply'
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
        message.date = new Date().toLocaleString();
        message.user = 'Zen';
        this.props.handlerUserReply(message);
        ReactDOM.findDOMNode(this.refs.userInput).value = ''
        let url = Config.url + '/askQuestion';
        Axios.post(url, {question: message}).then((response) => {
            console.log(response);
            if (response.data.result) {
                ginniReply = [< AssistantGinniMixedReply handleGinniReply = {
                        this.props.handleGinniReply
                    }
                    data = {
                        response.data.result
                    } />];
            } else if (response.data.keywords) {
                ginniReply.push(< AssistantGinniTextReply text = {response.data.answer} />);

                ginniReply.push(<AssistantGinniKeywordReply handleGinniReply = {
                        this.props.handleGinniReply
                    }
                    data = {
                        response.data.keywords
                    } />)
            } else {
                ginniReply = [< AssistantGinniTextReply text = {
                        response.data.answer
                    } />];
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
