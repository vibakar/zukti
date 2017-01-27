import React from 'react';
import {
    Grid,
    Menu,
    Input,
    Dropdown,
    Image,
    Icon,
    Popup
} from 'semantic-ui-react';
const trigger = (
    <span>
        <Image avatar src='http://semantic-ui.com/images/avatar2/large/patrick.png'/> {name = "jimmy"}
    </span>
)

export default class TopMenuBot extends React.Component {
    render() {
        return (

            <div style={{  width:"89%",
              backgroundColor:"#f3f2f2"}}>
                <Menu secondary>
                    <Menu.Item>
                        <a href="#/adminhome">
                            <Popup trigger={< Icon name = "arrow circle left" size = "large" circular color = 'teal' />} content='Back' size='mini'/>
                        </a>
                    </Menu.Item>
                      <Menu.Item position='right'>
                      </Menu.Item>
                        <Menu.Item>
                          <h3>THE CODE AESSISTANT/GENIE</h3>
                        </Menu.Item>
                    <Menu.Item position='right'>
                        <Dropdown trigger={trigger} pointing='top right' icon={null}>
                            <Dropdown.Menu >
                              <a href='#/profile'>
                                <Dropdown.Item text='My Profile' icon='user'/></a>
                                <a href="#/change">
                                    <Dropdown.Item text='ChangePassword' icon='key'/></a>
                                <Dropdown.Item text='Settings' icon='settings'/>
                                <Dropdown.Item text='Help' icon='help'/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </div>

        );
    }
}
