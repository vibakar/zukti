import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Cookie from 'react-cookie';
import {hashHistory} from 'react-router';
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
      firstname:'',
      usertype:false
    }
  }
  componentDidMount() {
    $.ajax({
        url: "http://localhost:8080/userProfile",
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            var authType = Cookie.load("authType");
            console.log(authType+"hv");
            if (authType == "local") {
                this.setState({name: res.user.local.name, email: res.user.local.email, photo: res.user.local.photos, usertype: true});
            }
        }.bind(this),
        error: function(err) {
            console.log("error", err);
        }.bind(this)
    });
  }
  onSubmitEmail() {
      hashHistory.push('/adminprofile')
  }
    render() {
      const customername =  this.state.name;
            const trigger = (
      <span>
      <Image avatar src={this.state.photo}/> {name=customername}
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
                                <Dropdown.Item text='Edit Profile' disabled={(!this.state.usertype)} icon='user' onClick={this.onSubmitEmail}/></a>
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
