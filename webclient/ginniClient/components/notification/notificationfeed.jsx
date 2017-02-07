import React from 'react'
import {Feed, Icon,Grid,Card,Divider, Image} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';
import './notifications.css';
import Cookie from 'react-cookie';
import Axios from 'axios';
export default class Notificationfeed extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          photo:'',
          name:'',
          email:''
        }
    }
    componentDidMount(){
      let self=this;
      Axios({
          url: "http://localhost:8080/userProfile",
          method: 'GET',
          data: 'json'
        }).then(function (response) {
          let authType = Cookie.load("authType");
          console.log(authType);
          if (authType == "facebook") {
              console.log(response.data.user.facebook.displayName);
              self.setState({name: response.data.user.facebook.displayName, email: response.data.user.facebook.email, photo: response.data.user.facebook.photos, usertype: false});
          }
          else if (authType == "google") {
              self.setState({name: response.data.user.google.name, email: response.data.user.google.email, photo: response.data.user.google.photos, usertype: false});
          }
          else if (authType == "local") {
              self.setState({name: response.data.user.local.name, email: response.data.user.local.email, photo: response.data.user.local.photos, usertype: true});
          }
        })
         .catch(function (error) {
              console.log("error", error);
        });
    }
  render() {
        return (


            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <Image avatar src={this.state.photo} size='small'/>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User id="messagesender">{this.props.msgSender}</Feed.User>
                            <Feed.Date id="senderdate">{this.props.date}</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra id="notification">
                            {this.props.dispData}
                        </Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
