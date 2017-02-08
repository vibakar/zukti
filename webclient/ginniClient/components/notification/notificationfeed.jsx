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
          url: "http://localhost:8080/admindetails",
          method: 'post',
          data: {data: self.props.msgSenderemail}
        }).then(function (response) {
          console.log(response.data[0].local.photos)
          self.setState({photo: require('../../../../webserver/images/'+response.data[0].local.photos)});
        })
         .catch(function (error) {
              console.log("error", error);
        });
    }
  render() {
   let imagename = this.state.photo;
   //alert(imagename);
        return (
            <Feed>
                <Feed.Event>
                      <Image avatar src={this.state.photo}/>
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
