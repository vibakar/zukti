
import React, {Component} from 'react';
import Content from '../sideBarPusherContent/content';
//import TopMenuBot from './topmenubot';import ClientProfile from '../clientprofile/clientprofile';
import adminProfile from '../admin/adminprofile';
import {
    Sidebar,
    Segment,
    Button,
    Menu,
    Image,
    Icon,
    Header,
    Grid,
    Divider,
    Dropdown,
    Popup,
    Card,
    Feed
} from 'semantic-ui-react';
import axios from 'axios';
import {hashHistory} from 'react-router';
import './menu.css';

export default class SidebarBot extends Component {


    constructor() {
      super();
      this.state={
        activeItem:'SetupAi',
        details: '',
        email:'',
        firstname:'',
        lastname:''
      }
      this.onSubmitEmail=this.onSubmitEmail.bind(this);

    }
    componentDidMount(){
      var self=this;
      axios({
          url: ' http://localhost:8080/clientinformation',
          method: 'get'
        }).then(function(response) {
          console.log(response.data);
          self.setState({firstname: response.data.firstname})
                    // console.log(msg);
          }).catch(function(err) {
              // console.log(err);
          })
    }
    onSubmitEmail(){

    hashHistory.push('/adminprofile');
    }



    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    render() {
        const activeItem = this.state.activeItem;
        const customername =  this.state.firstname;
                const trigger = (
          <span>
          <Image avatar src='http://semantic-ui.com/images/avatar2/large/patrick.png'/> {name=customername}
          </span>
        );
        return (
          <div  id="leftbarmenu">
                <Sidebar as={Menu} className='fixed' animation='slide along' width='thin' visible={true} icon='labeled' vertical inverted>
                    <Menu.Item name='Genie'>
                        <a href="/home"><Image src='../../images/ginianim.gif'  size='tiny' avatar/></a>
                    </Menu.Item>
                    <Menu.Item name='SetupAi' active={activeItem === 'SetupAi'} onClick={this.handleItemClick}>
                        <Icon name='book' color='teal'/>
                        Set up AI
                    </Menu.Item>
                    <Menu.Item name='BroadCast' active={activeItem === 'BroadCast'} onClick={this.handleItemClick}>
                        <Icon name='announcement' color='teal'/>
                        BroadCast
                    </Menu.Item>
                    <Menu.Item name='Users' active={activeItem === 'Users'} onClick={this.handleItemClick}>
                        <Icon name='users' color='teal'/>
                        Users
                    </Menu.Item>
                    <Menu.Item name='Analyze' active={activeItem === 'Analyze'} onClick={this.handleItemClick}>
                        <Icon name='spy' color='teal'/>
                        Analyze
                    </Menu.Item>
                    <Menu.Item name='UseTheBot' active={activeItem === 'UseTheBot'} onClick={this.handleItemClick}>
                        <Icon name='book' color='teal'/>
                        Use the bot
                    </Menu.Item>
                    <Menu.Item name='TrainBot' active={activeItem === 'UseTheBot'} onClick={this.handleItemClick}>
                        <Icon name='child' color='teal'/>
                        TrainBot
                    </Menu.Item><br/><br/><br/><br/>
                    <Menu.Item name='UseTheBot'>
                          <a href='#/log'><Icon name='sign out' color='teal'/>
                      Logout</a>
                    </Menu.Item>
                  </Sidebar>
                  <Sidebar.Pusher id="sidebarpusher">
                      <Segment id="segmentleftbar">
                        <div id='topmenudiv'>
                            <Menu secondary>
                                <Menu.Item>
                                    <a href="#/adminhome">
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
                                            <Dropdown.Item text='My Profile' icon='user' onClick={this.onSubmitEmail}/>
                                            <Dropdown.Item text='Settings' icon='settings'/>
                                            <Dropdown.Item text='Help' icon='help'/>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Menu.Item>
                            </Menu>
                        </div>


                        <div id='leftmenucontentdiv'>
                              <Content sidebarItemSelected={activeItem}/>
                        </div>
                      </Segment>
                      </Sidebar.Pusher>
                </div>
              );
            }
          }
