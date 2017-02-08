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
              self.setState({name: response.data.user.local.name, email: response.data.user.local.email, photo: response.data.user.local.photos, usertype: true});
        })
         .catch(function (error) {
              console.log("error", error);
        });
    }
  render() {
    let imagename = this.state.photo;
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                      <Image avatar src={require('../../../../webserver/images/defultImage.jpg')}/>
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
