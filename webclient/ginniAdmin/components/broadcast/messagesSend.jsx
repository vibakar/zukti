
import React from 'react'
import {Feed, Icon} from 'semantic-ui-react'
import AdminFeed from './AdminFeed'
import axios from 'axios'
import Config from '../../../../config/url'

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: ''
        }
    }

    //to make axios call and get name of admin
    componentWillMount() {

        let url = Config.url + '/getadmin';
        let admin;
        axios.get(url).then((response) => {
            response.data.map((data) => {
                if (data.type === 'Admin') {
                    admin = data.name;
                    this.state.admin = admin;
                }
            })
          }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        let feed = this.props.send.map((msg) =>< AdminFeed text = {
            msg.split("-")[0]
        }
        type = {msg.split("-")[1]}
        name = {
            this.state.admin
        } />)
        return (
            <div>
                {feed}
            </div>
        );
    }
}
