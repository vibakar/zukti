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
    Feed,Link,Input,Dropdown
} from 'semantic-ui-react';
import axios from 'axios';
import {hashHistory} from 'react-router';
import './leftmenu.css';
export default class LeftMenu extends Component {
    constructor(props){
      super(props);
      this.state={
        activeItem:'Build',
        details: '',
        email:'',
        firstname:'',
        lastname:''
      }
      this.onSubmitEmail=this.onSubmitEmail.bind(this);
    }
    componentDidMount() {
        var self = this;
        axios({url: ' http://localhost:8080/clientinformation', method: 'get'}).then(function(response) {
            self.setState({firstname: response.data[0].firstname})
            // console.log(msg);
        }).catch(function(err) {
            // console.log(err);
        })
    }
    onSubmitEmail(){
    hashHistory.push('/profile')
    }

handleItemClick = (e, {name}) => this.setState({activeItem: name})
    render() {
        const activeItem = this.state.activeItem;
        const customername = this.state.firstname;
                const trigger = (
          <span>
          <Image avatar src='http://semantic-ui.com/images/avatar2/large/patrick.png'/> {name=customername}
          </span>
        );
        return (
            <div  id="leftbarmenu">
                <Sidebar as={Menu} className='fixed' animation='slide along' width='thin' visible={true} icon='labeled' vertical inverted>
                    <Menu.Item name='Genie' active={activeItem === 'Genie'} onClick={this.handleItemClick}>
                      <a href="#/clienthome">  <Image src='../../images/ginianim.gif'  size='tiny' avatar/></a>
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
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
                                  <h3>THE CODE AESSISTANT/GENIE</h3>
                              </Menu.Item>
                              <Menu.Item position='right'>
                                  <Dropdown trigger={trigger} pointing='top right' icon={null}>
                                      <Dropdown.Menu >
                                          <Dropdown.Item text='Edit Profile' icon='user' onClick={this.onSubmitEmail}/>
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
