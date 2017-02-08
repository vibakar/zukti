import React from 'react';
import {Feed, Icon, Label} from 'semantic-ui-react';
import {Popup, Comment} from 'semantic-ui-react';
import AssistantGinniUrlDisplay from './assistantGinniUrlDisplay';
import AssistantGinniVideoDisplay from './assistantGinniVideoDisplay';
import AssistantGinniMoreTextDisplay from './assistantGinniMoreTextDisplay';
import AssistantGinniPlainText from './assistantGinniPlainText';
import AssistantGinniOptions from './assistantGinniOptions';
import Axios from 'axios';
import Snackbar from 'material-ui/Snackbar';

export default class AssistantGinniMixedReply extends React.Component {
    // props validation
    static propTypes = {
        handleGinniReply: React.PropTypes.func.isRequired,
        data: React.PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            openSnackbar: false,
            snackbarMsg: ''

        }
        // function to show videos url feteched from response
        this.displayMoreText = this.displayMoreText.bind(this);
        this.displayVideos = this.displayVideos.bind(this);
        this.displayBlogs = this.displayBlogs.bind(this);
        this.savedquery = this.savedquery.bind(this);
    }
    handleRequestClose = () => {
        this.setState({openSnackbar: false});
    };

    savedquery(message)
    {
        this.setState({openSnackbar: true, snackbarMsg: "saved for reference"});
        console.log(message);

        Axios({url: ' http://localhost:8080/clientinformation', method: 'get'}).then(function(response) {
            console.log("email" + response.data[0].local.email);
            Axios({
                url: 'http://localhost:8080/savequery/answeredquery',
                method: 'POST',
                data: {
                    email: response.data[0].local.email,
                    savedquery: {
                        question: "",
                        answer: message
                    }
                }
            }).then(function(msg) {
                console.log(msg);
            }).catch(function(err) {
                console.log(err);
            });

        }).catch(function(err) {
            // alert("bjhbj"+err);
        });
    }

    displayMoreText() {
        let textResponseArray = this.props.data.text;
        textResponseArray.shift();
        ginniReply = textResponseArray.map((answer, index) => {
            return <AssistantGinniMoreTextDisplay  textValue={answer.value}/>
        });
        this.props.handleGinniReply(ginniReply);
    }
    displayVideos() {
        let ginniReply = [<AssistantGinniPlainText value = 'Here is a top rated video for you' />];
        ginniReply.push(<AssistantGinniVideoDisplay handleGinniReply={this.props.handleGinniReply} videos={this.props.data.video}/>);
        this.props.handleGinniReply(ginniReply);
    }
    displayBlogs() {
        let ginniReply = [<AssistantGinniPlainText value = 'The most top rated blog for you is' />];
        ginniReply.push(<AssistantGinniUrlDisplay handleGinniReply={this.props.handleGinniReply} blogs={this.props.data.blog}/>);
        this.props.handleGinniReply(ginniReply);
    }
    render() {
        const {open} = this.state;
        let text = this.props.data.text[0].value;
        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/geniebot.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={this.props.data.time} user='Genie'/>
                        <Feed.Extra text>
                            {text}
                        </Feed.Extra>
                        <Feed.Extra>
                            <Label.Group color='blue'>
                                {this.props.data.text.length > 1
                                    ? <Label onClick={this.displayMoreText}>View more</Label>
                                    : ''}
                                {this.props.data.blog
                                    ? <Label onClick={this.displayBlogs}>Blogs</Label>
                                    : ''}
                                {this.props.data.video
                                    ? <Label onClick={this.displayVideos}>Videos</Label>
                                    : ''}
                            </Label.Group>
                        </Feed.Extra>
                        <AssistantGinniOptions type='text' value={this.props.text}/>
                    </Feed.Content>
                </Feed.Event>
                <Snackbar open={this.state.openSnackbar} message={this.state.snackbarMsg} autoHideDuration={1000} onRequestClose={this.handleRequestClose}/>
            </Feed>
        );
    }
}
