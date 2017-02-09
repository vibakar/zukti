import React from 'react';
import {Form, TextArea, Button, Icon} from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Cookie from 'react-cookie';
import Config from '../../../../config/url';
export default class AddContent extends React.Component {
    static propTypes = {
        handleAdminInput: React.PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            username: 'Admin'
        };
    }
    componentDidMount() {
        let username = Cookie.load('username');
        if (username) {
            this.state.username = username;
        }
    }
    // to handle text data
    handleSubmitText = (e) => {
        e.preventDefault();
        let text = ReactDOM.findDOMNode(this.refs.text).value;
        let date = new Date().toLocaleString();
        this.props.handleAdminInput(this.state.username, text, date);
        let socket = io();
        socket.emit('client event', {
            username: this.state.username,
            value: text,
            date: date
        });
        ReactDOM.findDOMNode(this.refs.text).value = '';
        let url = Config.url + '/savebroadcastmessage';
        axios.post(url, {
            username: this.state.username,
            message: text,
            date: date
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <h1>Enter your message for users</h1>
                <Form onSubmit={this.handleSubmitText}>
                    <TextArea placeholder='Tell us more'
                     autoHeight name='text' ref='text'/><br/><br/>
                    <Button color='red' type='submit' animated>
                        <Button.Content visible>Submit</Button.Content>
                        <Button.Content hidden>
                            <Icon name='right arrow'/>
                        </Button.Content>
                    </Button>
                </Form>
            </div>
        )
    }
}
