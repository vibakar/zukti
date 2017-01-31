import React from 'react'
import {Feed, Icon} from 'semantic-ui-react'
import AdminFeed from './AdminFeed'
import axios from 'axios'
import Config from '../../../../config/url'

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          admin :''
        }
    }

    componentWillMount(){
      console.log(Config.url);
      let url = Config.url+'/getadmin';
      let admin;
      axios.get(url).then((response)=>{
      response.data.map((data)=>{
        if(data.type === 'Admin'){
          admin = data.name;
          this.state.admin = admin;
        }
      })
        console.log(response)
      }).catch((error)=>{
        alert(error);
      });
    }
    render() {
        let feed = this.props.send.map((msg) =>< AdminFeed text = {msg} name ={this.state.admin}/>)
        return (
            <div>
                {feed}
            </div>
        );
    }
}
