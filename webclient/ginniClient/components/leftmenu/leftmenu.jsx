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
    Label,
    Dropdown
} from 'semantic-ui-react';
import Axios from 'axios';
import Cookie from 'react-cookie';
import {hashHistory} from 'react-router';
import Config from '../../../../config/url';
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
            usertype: false,
            counter: 0
        }
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
        this.getNotificationCount = this.getNotificationCount.bind(this);
        this.getUserInformation = this.getUserInformation.bind(this);
    }

    handleItemClick = ((e, {name}) => {
        if (this.state.activeItem == 'notifications') {
            let url = Config.url + '/getbroadcastmessage/updateCount'
            this.state.counter = 0;
            Axios.post(url).then((response) => {}).catch((error) => {console.log(error);});
        }
        this.setState({activeItem: name,counter:this.state.counter});
    });
    componentDidMount() {
        this.getUserInformation();
        this.getNotificationCount();
        let socket = io();
        console.log('Hiiii');
        socket.on('update label', (data) => {
            console.log(data);
            this.state.counter = this.state.counter + 1;
            this.setState({counter: this.state.counter});
        });
    }
    getNotificationCount() {
        let url = Config.url + '/getbroadcastmessage/count';
        console.log(url);
        Axios.get(url).then((response) => {
            console.log(response);
            this.setState({counter: response.data.count});
        }).catch((error) => {
            console.log(error);
        })
    }
    getUserInformation() {
    let self=this;
    Axios({
        url: "http://localhost:8080/userProfile",
        method: 'GET',
        data: 'json'
      }).then(function (response) {
        let authType = Cookie.load("authType");
        console.log(authType);
        if (authType == "facebook") {
            console.log(response.data.user.facebook.displayName);
            self.setState({name: response.data.user.facebook.displayName, email: response.data.user.facebook.email, photo: response.data.user.facebook.photos, usertype: false});
        }
        else if (authType == "google") {
            self.setState({name: response.data.user.google.name, email: response.data.user.google.email, photo: response.data.user.google.photos, usertype: false});
        }
        else if (authType == "local") {
            self.setState({name: response.data.user.local.name, email: response.data.user.local.email, photo: response.data.user.local.photos, usertype: true});
        }
      })
       .catch(function (error) {
            console.log("error", error);
      });
  }
        onSubmitEmail() {
        hashHistory.push('/profile')
    }

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
                        <Label color='red' floating-left>{this.state.counter}</Label>
                        <Icon name='alarm' color='teal'/>
                        notifications
                    </Menu.Item>
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
