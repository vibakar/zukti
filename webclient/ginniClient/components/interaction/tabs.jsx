import React from 'react';
import {Menu, Segment, Grid} from 'semantic-ui-react';
import Embedly from 'react-embedly';

export default class Tabs extends React.Component {
  constructor()
  {
    super();
    this.state = {
      activeItem: 'video'
     };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleItemClickblog = (e, { name }) => this.setState({ activeItem: name });

render() {
  const { activeItem } = this.state;
  return(
    <div>
      <Grid>
        <Grid.Column width={6}>
     <Menu attached='top' borderless tabular basic color='olive' size='tiny'>
       <Menu.Item name='video' active={activeItem === 'video'} onClick={this.handleItemClick} />
       <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClickblog} />
       <Menu.Item name='snippet' active={activeItem === 'snippet'} onClick={this.handleItemClick} />
     </Menu>

     <Segment >
       <Embedly url='https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b' apiKey="73f538bb83f94560a044bc6f0f33c5f6"/>
     </Segment>

   </Grid.Column>
     </Grid>
   </div>
 );
}
}
