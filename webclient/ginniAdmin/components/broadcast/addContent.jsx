
import React from 'react';
import {Form, Input, TextArea, Button, Icon} from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Config from '../../../../config/url';
export default class AddContent extends React.Component {
  static propTypes = {
      handlertextinput: React.PropTypes.func.isRequired
  };
    constructor(props) {
        super(props);
        this.state = {
          counter :0
        }
    }

    //to handle text data
    handleSubmitText = (e) => {
        e.preventDefault();
        this.state.counter = this.state.counter + 1;
        let type = 'text';
        let text = ReactDOM.findDOMNode(this.refs.text).value;
        this.props.handlertextinput(text,type);
        let socket = io();
        socket.emit('client event', { value: text,type :type, notificationcount: this.state.counter });

        ReactDOM.findDOMNode(this.refs.text).value = '';

      let url = Config.url + '/savebroadcastmessage';
      axios.post(url,{message:text,type:type,date:(new Date().toLocaleString()),notificationCount:this.state.counter}).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      });
    }
    //to handle video data
    handleSubmitVideo = (e) => {
        e.preventDefault();
        let type = 'video';
        this.state.counter = this.state.counter + 1;
        let videoUrl = ReactDOM.findDOMNode(this.refs.video).value;
        this.props.handlertextinput(videoUrl,type);
        ReactDOM.findDOMNode(this.refs.video).value = '';
        var socket = io();
        socket.emit('client event', { value: videoUrl,type :type ,notificationcount: this.state.counter});


        let url = Config.url + '/savebroadcastmessage';
        axios.post(url,{message:videoUrl,type:type,date:(new Date().toLocaleString()),notificationCount:this.state.counter}).then((response)=>{
          console.log(response);
        }).catch((error)=>{
          console.log(error);
        });

    }

    //to handle blog data
    handleSubmitBlog = (e) => {
        e.preventDefault();
        this.state.counter = this.state.counter + 1;
        let blogUrl = ReactDOM.findDOMNode(this.refs.blog).value;
        let type = 'blog';
        this.props.handlertextinput(blogUrl,type);
        ReactDOM.findDOMNode(this.refs.blog).value = '';
        var socket = io();
        socket.emit('client event', { value: blogUrl,type :type, notificationcount: this.state.counter});


        let url = Config.url + '/savebroadcastmessage';
        axios.post(url,{message:blogUrl,type:type,date:(new Date().toLocaleString()),notificationCount:this.state.counter}).then((response)=>{
          console.log(response);
        }).catch((error)=>{
          console.log(error);
        });
    }

    render() {
        switch (this.props.name) {
            case 'text':
                {
                    return (
                        <div>
                            <h1>Enter text for react</h1>
                            <Form onSubmit={this.handleSubmitText}>
                                <TextArea placeholder='Tell us more' autoHeight name='text' ref='text'/><br/><br/>
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
            case 'video':
                {
                    return (
                        <div>
                            <h1>Enter videoUrl for react</h1>
                            <Form onSubmit={this.handleSubmitVideo}>
                                <TextArea placeholder='enter url' autoHeight name='video' ref='video'/><br/><br/>
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
            case 'blog':
                {
                    return (
                        <div>
                            <h1>Enter BlogUrl for react</h1>
                            <Form onSubmit={this.handleSubmitBlog}>
                                <TextArea placeholder='enter url' autoHeight name='blog' ref='blog'/><br/><br/>
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
    }
}
