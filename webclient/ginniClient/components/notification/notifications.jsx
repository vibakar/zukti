import React from 'react'
import Notificationfeed from './notificationfeed'
import Config from '../../../../config/url';
import axios from 'axios';
import {Scrollbars} from 'react-custom-scrollbars';
import {Feed, Icon,Grid,Card} from 'semantic-ui-react';

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
          msg.date = new Date().toLocaleString();
          this.state.message.push(msg);
          this.setState({message:this.state.message});
        });

    }
    render() {

      let messages = this.state.message.reverse().map((msg,index)=>
          <Notificationfeed key={index} feed={msg.text} type={msg.type} date={msg.date}/>);
      return (
        <div style={{ backgroundImage: "url('../../images/wall.jpg')", marginTop: '1%',height:'100%'}}>
              <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={12}>
            <Card fluid>
              <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
                  display: "none",
                  position: "right"
              }}/>} autoHeight autoHeightMin={555}>
                  <div >
                                {messages}
      </div></Scrollbars>  </Card>
                </Grid.Column>
                      <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
        </Grid>
          </div>


         );
    }
}
