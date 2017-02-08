import React, {Component} from 'react';
import Content from '../sideBarPusherContent/content';
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
import './menu.css';
import TopMenuBot from './topmenubot';
export default class SidebarBot extends Component {


    constructor(){
      super();
      this.state={
        activeItem:'SetupAi'
      }
    }
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    render() {
        const activeItem = this.state.activeItem;
        return (
            <div style={{
                height: '100%'
            }}>
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
                        Broadcast
                    </Menu.Item>
                    <Menu.Item name='Users' active={activeItem === 'Users'} onClick={this.handleItemClick}>
                        <Icon name='users' color='teal'/>
                        Users
                    </Menu.Item>
                    <Menu.Item name='Analyze' active={activeItem === 'Analyze'} onClick={this.handleItemClick}>
                        <Icon name='spy' color='teal'/>
                        Analyze
                    </Menu.Item>
                    <Menu.Item name='TrainBot' active={activeItem === 'UseTheBot'} onClick={this.handleItemClick}>
                        <Icon name='child' color='teal'/>
                        Train bot
                    </Menu.Item>
                    <Menu.Item name='Unanswered Queries' active={activeItem === 'Unanswered Queries'} onClick={this.handleItemClick}>
                        <Icon name='help' color='teal'/>
                      Unanswered Queries
                    </Menu.Item>
                    <Menu.Item name='LogOut'>
                        <Icon name='sign out' color='teal'/>
                        <a href='#/log'>Logout</a>
                    </Menu.Item>
                  </Sidebar>
                <Sidebar.Pusher className='container' style={{
                    width: '90%',
                    height:'90%'
                }}>
                    <Segment style={{
                        'margin-top': '0px',
                        'padding': '0px',
                        height:'100%'
                    }}>
                      <TopMenuBot/>
                      <div style={{'background-color':'#f3f2f2',height:'100%'}}>
                            <Content sidebarItemSelected={activeItem}/>
                      </div>
                        </Segment>
                    </Sidebar.Pusher>
                </div>
              );
            }
          }
