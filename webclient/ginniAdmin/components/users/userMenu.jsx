import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import UserTable from './UserTable';
import Axios from 'axios';

export default class UserMenu extends Component {
    constructor() {
        super();
        // setting the default values for some state variables
        this.state = {
            activeItem: 'react',
            userinformation: [],
            domainUserArray: []

        };

        this.handleItemClick = this.handleItemClick.bind(this);
        this.domain = this.domain.bind(this);
    }
    handleItemClick(e, {name})
    {
        this.setState({activeItem: name});
        this.domain(name);
    }
    domain(name) {
        let domainUserArray = [];
        // get the user informantion
        this.state.userinformation.map(function(newsdata) {
            if (newsdata.local.loggedinDomain === name) {
                domainUserArray.push(newsdata);
            }
        });
        this.setState({domainUserArray: domainUserArray});
    }
    componentDidMount() {
        Axios({url: 'http://localhost:8080/viewall', method: 'GET'}).then(function(response) {
            this.setState({userinformation: response.data});
        }.bind(this));
    }
    render() {
        const activeItem = this.state.activeItem;

        return (
            <div style={{
                height: '100%'
            }}>

                <Menu inverted size='medium' widths={2}>
                    <Menu.Item color='teal' name='react' active={activeItem === 'react'}
                      onClick={this.handleItemClick}/>
                    <Menu.Item color='teal' name="design pattern"
                      active={activeItem === 'design pattern'}
                      onClick={this.handleItemClick}></Menu.Item>
                </Menu>
                <UserTable userinformation={this.state.domainUserArray}/>
            </div>
        );
    }
}
