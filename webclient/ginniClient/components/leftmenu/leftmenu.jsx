import React, {Component} from 'react';
import LeftMenuContent from '../leftmenuPusherContent/leftmenuContent';
import {
    Sidebar,
    Segment,
    Button,
    Image,
    Icon,
    Header,
    Grid,
    Divider,
    Menu,
    Card,
    Popup,
    Feed,
    Link,
    Input,
    Dropdown
} from 'semantic-ui-react';
import axios from 'axios';
import $ from 'jquery';
import Cookie from 'react-cookie';
import {hashHistory} from 'react-router';
import './leftmenu.css';
export default class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'Build',
            details: '',
            email: '',
            firstname: '',
            lastname: '',
            usertype: false
        }
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
        this.getUserInformation = this.getUserInformation.bind(this);
    }
    componentDidMount() {
        this.getUserInformation();
    }
    getUserInformation() {
        $.ajax({
            url: "http://localhost:8080/userProfile",
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                var authType = Cookie.load("authType");
                if (authType == "facebook") {
                    console.log(res.user.facebook.displayName);
                    this.setState({name: res.user.facebook.displayName, email: res.user.facebook.email, photo: res.user.facebook.photos, usertype: false});
                }
                if (authType == "google") {
                    this.setState({name: res.user.google.name, email: res.user.google.email, photo: res.user.google.photos, usertype: false});
                }
                if (authType == "local") {
                  console.log("hello");
                  console.log(res.user.local.name);
                    this.setState({name: res.user.local.name, email: res.user.local.email, photo: res.user.local.photos, usertype: true});
                }
            }.bind(this),
            error: function(err) {
                console.log("error", err);
            }.bind(this)
        });
    }
    onSubmitEmail() {
        hashHistory.push('/profile')
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    render() {
        const activeItem = this.state.activeItem;
        const customername = this.state.name;
        const trigger = (
            <span>
                <Image avatar src={this.state.photo}/> {name = customername}
            </span>
        );
        return (
            <div id="leftbarmenu">
                <Sidebar as={Menu} className='fixed' animation='slide along' width='thin' visible={true} icon='labeled' vertical inverted>
                    <Menu.Item name='Genie' active={activeItem === 'Genie'} onClick={this.handleItemClick}>
                        <a href="#/clienthome">
                            <Image src='../../images/ginianim.gif' size='tiny' avatar/></a>
                    </Menu.Item>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>
                        <Icon name='home' color='teal'/>
                        Home
                    </Menu.Item>
                    <Menu.Item name='ChatBot' active={activeItem === 'ChatBot'} onClick={this.handleItemClick}>
                        <Icon name='talk' color='teal'/>
                        ChatBot
                    </Menu.Item>
                    <Menu.Item name='SavedQueries' active={activeItem === 'SavedQueries'} onClick={this.handleItemClick}>
                        <Icon name='star' color='teal'/>
                        SavedQueries
                    </Menu.Item>
                    <Menu.Item name='Unanswered Queries' active={activeItem === 'Unanswered Queries'} onClick={this.handleItemClick}>
                        <Icon name='help' color='teal'/>
                      Unanswered Queries
                    </Menu.Item>
                    <Menu.Item name='notifications' active={activeItem === 'notifications'} onClick={this.handleItemClick}>
                        <Icon name='help' color='teal'/>
                      notifications
                    </Menu.Item>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <Menu.Item name='LogOut' active={activeItem === 'LogOut'} onClick={this.handleItemClick}>
                        <a href='#/logout'><Icon name='sign out' color='teal'/>
                            LogOut</a>
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher id="sidebarpusher">
                    <Segment id="segmentleftbar">
                        <div id='topmenudiv'>
                            <Menu secondary>
                                <Menu.Item>
                                    <a href="#/clienthome">
                                        <Popup trigger={< Icon name = "arrow circle left" size = "large" circular color = 'teal' />} content='Back' size='mini'/>
                                    </a>
                                </Menu.Item>
                              <Menu.Item/>  <Menu.Item/>  <Menu.Item/>
                                <Menu.Item position='right'></Menu.Item>
                                <Menu.Item>
                                    <h3>GENIE</h3>
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Dropdown trigger={trigger} pointing='top right' icon={null}>
                                        <Dropdown.Menu >
                                            <Dropdown.Item text='Edit Profile' icon='user' disabled={(!this.state.usertype)} onClick={this.onSubmitEmail}/>
                                            <Dropdown.Item text='Settings' icon='settings'/>
                                            <Dropdown.Item text='Help' icon='help'/>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Menu.Item>
                            </Menu>
                        </div>

                        <div id='leftmenucontentdiv'>
                            <LeftMenuContent sidebarItemSelected={activeItem}/>
                        </div>
                    </Segment>
                </Sidebar.Pusher>
            </div>
        );
    }
}
