import React from 'react';
import {Feed, Icon} from 'semantic-ui-react';
import {Popup, Comment} from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import Snackbar from 'material-ui/Snackbar';
import Axios from 'axios';

export default class AssistantGinniMixedReply extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        openSnackbar: false,
        snackbarMsg: ''
      }
        this.savedquery=this.savedquery.bind(this);
  }
  handleRequestClose = () => {
      this.setState({openSnackbar: false});
  };
  savedquery(message)
    {
      this.setState({openSnackbar: true, snackbarMsg:"saved for reference"});
          console.log(message);

          Axios({
              url: ' http://localhost:8080/clientinformation',
              method: 'get'
          }).then(function(response) {
              console.log("email"+response.data[0].local.email);
                    Axios({
                      url: 'http://localhost:8080/savequery/answeredquery',
                      method:'POST',
                      data: {email:response.data[0].local.email,
                            savedquery:{question:"",answer:message}}
                    }).then(function(msg) {
                        console.log(msg);
                    }).catch(function(err) {
                        console.log(err);
                    });

          }).catch(function(err) {
              // alert("bjhbj"+err);
          });
        }

    render() {
      const {open} = this.state
        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/geniebot.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={new Date().toLocaleString()} user='Genie'/>
                        <Feed.Extra text>
                            {this.props.message}
                        </Feed.Extra>
                        <Feed.Extra images>
                                <ReactPlayer url={this.props.url} playing={false} controls={true}/>
                        </Feed.Extra>
                        <Feed.Meta>
                            <Popup trigger={< Icon circular name = 'flag' color = 'purple' />} content='Flag' size='mini'/>
                            <Popup trigger={< Icon circular name = 'save' color = 'green' onClick={()=>{this.savedquery(this.props.url)}}/>} content='save this message' size='mini'/>
                            <Popup trigger={< Icon circular name = 'like outline' color = 'blue' />} content='Like' size='mini'/>
                            <Popup trigger={< Icon circular name = 'dislike outline' color = 'blue' />} content='Dislike' size='mini'/>
                            <Popup trigger={< Icon circular name = 'delete' color = 'red' />} content='Delete' size='mini'/>
                            </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
                <Snackbar  open={this.state.openSnackbar} message={this.state.snackbarMsg} autoHideDuration={1000} onRequestClose={this.handleRequestClose}/>
            </Feed>
        );
    }
}
