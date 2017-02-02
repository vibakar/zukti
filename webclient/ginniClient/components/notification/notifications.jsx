import React from 'react'
import Notificationfeed from './notificationfeed'
import Config from '../../../../config/url';
import axios from 'axios';

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: []
        }
    }


    componentDidMount() {
        let socket = io();
        let url = Config.url + '/getbroadcastmessage';
        axios.get(url).then((response)=>{
          console.log(response);
          this.state.message = response.data;
          this.setState({message:this.state.message});
        }).catch((error)=>{
          console.log(error);
        });
        socket.on('update label', (data)=> {
          let msg = {};
          msg.type = data.type;
          msg.text = data.value;
          this.state.message.push(msg);
          this.setState({message:this.state.message});
        });

    }
    render() {

      let messages = this.state.message.map((msg,index)=> <Notificationfeed key={index} feed={msg.text} type={msg.type} />);
      return (
        <div>
        {messages}
        </div>
      );
    }
}
