import React from 'react'
import {Feed, Icon} from 'semantic-ui-react'
import Notificationfeed from './notificationfeed'

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: []
        }

    }


    componentDidMount() {
        let socket = io();

        socket.on('update label', (data)=> {
          this.state.message.push(data.value);
          this.setState({message:this.state.message});
        });

    }
    render() {
      let messages = this.state.message.map((msg,index)=> <Notificationfeed key={index} feed={msg} />);

      return (
        <div>
        {messages}
        </div>
      );
    }
}
