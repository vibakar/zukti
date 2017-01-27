import React from 'react';
import {Menu,Input,Feed,Dropdown,Icon} from 'semantic-ui-react';
import {
    Grid,
    Image,
    Popup,
    Rating,
    Header
} from 'semantic-ui-react';
import {Link} from 'react-router';
import './navbarstyle.css';
const trigger = (
  <span>
    <Image avatar src='http://semantic-ui.com/images/avatar2/large/patrick.png'/>
  </span>
)
export default class Navbar extends React.Component{

constructor(){

	super();

}


render()
{

return(
	           <Menu  attached='top' className='menustyle' style={{backgroundColor:'#ff0066'}}>
<Menu.Menu position='left'>
  <Menu.Item>
    <Link to =''><Icon name='home' color='black' size='large'/></Link>
  </Menu.Item>
  <Menu.Item>
  <div className='ui right aligned category search item'>
    <div className='ui transparent icon input'>
      <input className='prompt' type='text' placeholder='Search conversation...' />
      <i className='search link icon' />
    </div>
    <div className='results'></div>
  </div>
</Menu.Item>
</Menu.Menu>
<Menu.Menu position='right'>
							<Dropdown as={Menu.Item} icon='share alternate' simple>
									<Dropdown.Menu>
											<Dropdown.Item><Icon color='green' name='whatsapp'/>Whats app</Dropdown.Item>
											<Dropdown.Item><Icon color='blue' name='facebook f'/>Facebook</Dropdown.Item>
											<Dropdown.Item><Icon color='blue' name='twitter'/>Twitter</Dropdown.Item>
											<Dropdown.Item><Icon color='red' name='google plus official'/>Google</Dropdown.Item>
											<Dropdown.Item><Icon name='clipboard'/>Copy to Clip Board</Dropdown.Item>
									</Dropdown.Menu>
							</Dropdown>

									<Dropdown as={Menu.Item} icon='settings' simple>
											<Dropdown.Menu>
													<Dropdown.Item><Icon color='green' name='refresh'/>Refresh Chat</Dropdown.Item>
													<Dropdown.Item><Icon color='red' name='delete'/>Clear History</Dropdown.Item>
													<Dropdown.Item><Icon color='olive' name='alarm mute outline'/>set youself to away</Dropdown.Item>
													<Dropdown.Item><Icon color='orange' name='help'/>Help & feedback</Dropdown.Item>
													<Dropdown.Divider/>
													<Dropdown.Item><Icon color='red' name='bug'/>Report the Bot</Dropdown.Item>
											</Dropdown.Menu>
									</Dropdown>

									<Dropdown as={Menu.Item} icon='detective' simple >
											<Dropdown.Menu onClick={this.handle}>
													<Dropdown.Item ><Icon color='violet' name='tasks'/>To Do List</Dropdown.Item>
													<Dropdown.Item><Icon color='yellow' name='empty star'/>Starred Chats</Dropdown.Item>
													<Dropdown.Item><Icon color='purple' name='file'/>Files Shared</Dropdown.Item>
													<Dropdown.Item><Icon color='teal' name='file code outline'/>View Snippets</Dropdown.Item>
													<Dropdown.Item><Icon color='red' name='fa'/>Flagged tasks</Dropdown.Item>
											</Dropdown.Menu>
									</Dropdown>
<Menu.Item>
  <Dropdown trigger={trigger} simple>
  <Dropdown.Menu>
    <Dropdown.Item text='Account' icon='user' />
    <Dropdown.Item text='Settings' icon='settings' />
    <Dropdown.Item text='Sign Out' icon='sign out' />
  </Dropdown.Menu>
</Dropdown>
</Menu.Item>
<Menu.Item></Menu.Item>



                  </Menu.Menu>
  </Menu>





);
}
  }
