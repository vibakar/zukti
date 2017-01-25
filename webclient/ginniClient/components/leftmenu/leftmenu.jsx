import React, {Component} from 'react';
import LeftMenuContent from '../leftmenuPusherContent/leftmenuContent';
import TopMenu from './topmenu';
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
    Feed,Link,Input
} from 'semantic-ui-react';
import './leftmenu.css';
export default class LeftMenu extends Component {
    constructor(){
      super();
      this.state={
        activeItem:'Build'
      }
    }
handleItemClick = (e, {name}) => this.setState({activeItem: name})
    render() {
        const activeItem = this.state.activeItem;
        return (
            <div  id="leftbarmenu">
                <Sidebar as={Menu} className='fixed' animation='slide along' width='thin' visible={true} icon='labeled' vertical inverted>
                    <Menu.Item name='Genie' active={activeItem === 'Genie'} onClick={this.handleItemClick}>
                      <a href="#/clienthome">  <Image src='../../images/ginianim.gif'  size='tiny' avatar/></a>
                    </Menu.Item>
                <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} >
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
                    </Menu.Item><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <Menu.Item name='LogOut' active={activeItem === 'LogOut'} onClick={this.handleItemClick}>
                        <a href='#/logout'><Icon name='sign out' color='teal'/>
                        LogOut</a>
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher id="sidebarpusher">
                    <Segment id="segmentleftbar">
                    <TopMenu/>
                      <div id='leftmenucontentdiv'>
                            <LeftMenuContent sidebarItemSelected={activeItem}/>
                      </div>
                    </Segment>
                    </Sidebar.Pusher>

                </div>
              );
            }
          }
