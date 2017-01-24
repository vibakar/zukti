import React from 'react';
import {Menu, Segment} from 'semantic-ui-react';
export default class Tabs extends React.Component {
  constructor()
  {
    super();
    this.state = { activeItem: 'video' };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
render() {
  const { activeItem } = this.state;
  return(
    <div>
     <Menu attached='top' borderless tabular basic color='olive'>
       <Menu.Item name='video' active={activeItem === 'video'} onClick={this.handleItemClick} />
       <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick} />
       <Menu.Item name='snippet' active={activeItem === 'snippet'} onClick={this.handleItemClick} />
     </Menu>

     <Segment attached='bottom'>
       <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
     </Segment>
   </div>
 );
}
}
