import React from 'react'
import Notificationfeed from './notificationfeed'
import Config from '../../../../config/url';
import axios from 'axios';
import Embedly from 'react-embedly';
import {Feed, Icon, Grid, Card} from 'semantic-ui-react';

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
        this.processInputNotification=this.processInputNotification.bind(this);
    }
    componentDidMount() {
        let socket = io();
        let url = Config.url + '/getbroadcastmessage';
        axios.get(url).then((response) => {
            console.log(response);
            this.state.messages=response.data.map((msg,index)=>{
              let msgContentView = this.processInputNotification(msg.value);
              return <Notificationfeed key={index} date={msg.date} msgSender={msg.username} dispData={msgContentView}/>
            });
            this.state.messages.reverse();
            this.setState({messages: this.state.messages});
        }).catch((error) => {
            console.log(error);
        });
        socket.on('update label', (data) => {
            let msgContentView = this.processInputNotification(data.value);
            console.log('Recieved a msg');
            this.state.messages.unshift(<Notificationfeed key={this.state.messages.length-1} date={data.date} msgSender={data.username} dispData={msgContentView}/>);
            this.setState({messages: this.state.messages});
        });
    }

    processInputNotification(value){
      let urlRegex =/(\b(?:(https?|ftp):\/\/)?((?:www\d{0,3}\.)?([a-z0-9.-]+\.(?:[a-z]{2,4}|museum|travel)(?:\/[^\/\s]+)*))\b)/gi;
      let match = value.match(urlRegex);
      let inputTokens = value.split(' ');
      let str=[];
      match =match||[];
      inputTokens.forEach((item)=>{
          if(match.indexOf(item)>-1){
            str.push(<div>
                <Embedly url={item} apiKey="73f538bb83f94560a044bc6f0f33c5f6"/><a>{item}</a>
            </div>);
          }
          else{
            str.push(item+' ');
          }
        })
      return str;
    }
    render() {
        return (
            <div style={{
                backgroundImage: "url('http://exploretheme.com/wp-content/uploads/2015/03/restaurant-icons.jpg')",
                marginTop: '1%',
                height: '100%'
            }}>
                <Grid style={{'margin':'auto','marginTop':'10px'}} divided='vertically'>
                    <Grid.Row>
                      <h2>Notifications from the Admin</h2>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={16}>
                        {this.state.messages}
                      </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
