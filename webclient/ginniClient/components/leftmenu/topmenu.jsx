import React from 'react';
import {Grid,Menu,Input,Dropdown,Image,Icon,Popup}from 'semantic-ui-react';
const trigger = (
  <span>
      <Image avatar src='http://semantic-ui.com/images/avatar2/large/patrick.png'/>
      {name="jimmy"}
  </span>
)

export default class TopMenu extends React.Component{
  render(){
    return(

              <div id='topmenudiv'>
              <Menu secondary >
                  <Menu.Item>
                    <a href="#/homeclient">
                    <Popup trigger={<Icon name="arrow circle left" size="large" circular color='teal' />} content='Back' size='mini'/>
                  </a></Menu.Item>
                      <Menu.Item>
                  <Input transparent className='icon' icon='search' placeholder='Search your content' />
                  </Menu.Item>

                  <Menu.Item position='right'>
                  <Dropdown trigger={trigger} pointing='top right' icon={null}>
                  <Dropdown.Menu >
                  <Dropdown.Item text='Account' icon='user' />
                  <Dropdown.Item text='Settings' icon='settings' />
                  <Dropdown.Item text='Help' icon='help' />
                  </Dropdown.Menu>
                  </Dropdown>
                  </Menu.Item>
                  </Menu>
              </div>

    );
  }
}
