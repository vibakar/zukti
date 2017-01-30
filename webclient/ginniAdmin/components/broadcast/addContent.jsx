import React from 'react';
import {Form, Input, TextArea, Button, Icon} from 'semantic-ui-react';
import ReactDOM from 'react-dom';
export default class AddContent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmitText = (e) => {
      e.preventDefault();
      let text = ReactDOM.findDOMNode(this.refs.text).value;
      this.props.handlertextinput(text);


      ReactDOM.findDOMNode(this.refs.text).value = '';
    }

    handleSubmitVideo = (e) => {
      e.preventDefault();
      let text = ReactDOM.findDOMNode(this.refs.video).value;
this.props.handlertextinput(text);
ReactDOM.findDOMNode(this.refs.video).value = '';

    }

    handleSubmitBlog = (e) => {
      e.preventDefault();
      let text = ReactDOM.findDOMNode(this.refs.blog).value;
      this.props.handlertextinput(text);
      ReactDOM.findDOMNode(this.refs.blog).value = '';
    }

    render() {
        switch (this.props.name) {
            case 'text':
                {
                    return (
                        <div>
                            <h1>Enter text for react</h1>
                            <Form onSubmit={this.handleSubmitText}>
                                <TextArea placeholder='Tell us more' autoHeight name = 'text' ref = 'text'/>
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
                                <TextArea placeholder='enter url' autoHeight name = 'video' ref = 'video'/>
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
                                <TextArea placeholder='enter url' autoHeight name = 'blog' ref = 'blog'/>
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
