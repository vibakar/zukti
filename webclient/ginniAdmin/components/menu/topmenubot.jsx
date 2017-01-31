import React from 'react';
import axios from 'axios';
import {
    Grid,
    Menu,
    Input,
    Dropdown,
    Image,
    Icon,
    Popup
} from 'semantic-ui-react';


export default class TopMenuBot extends React.Component {
  constructor(){
    super();
    this.state={
      firstname:''
    }
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
    render() {
      const customername =  this.state.firstname;
            const trigger = (
      <span>
      <Image avatar src='http://semantic-ui.com/images/avatar2/large/patrick.png'/> {name=customername}
      </span>
    )
        return (

            <div style={{  width:"99%",
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
                              <a href='#/adminprofile'>
                                <Dropdown.Item text='Edit Profile' icon='user'/></a>
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
