import React from 'react';
import {Button} from 'semantic-ui-react';
import Config from '../../../../config/url';
import Axios from 'axios';
export default class ViewUserChat extends React.Component {
    constructor(props) {
        super(props);
         // function to retrive chat of a given user
         this.getUserChats = this.getUserChats.bind(this);
    }
    getUserChats() {
        let url = Config.url + '/retriveChat?email=' + this.props.userEmail;
        Axios.get(url).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <Button basic color='green' onClick={this.getUserChats}>ViewMore</Button>
        )
    }
}
