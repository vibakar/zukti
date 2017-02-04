import React from 'react';
import { Icon, Label, Menu, Input, Segment } from 'semantic-ui-react'
import AddContent from './addContent';

export default class ContentType extends React.Component{
  constructor(props){
    super(props);
    this.state = { activeItem: 'text' };
  }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handlertext = (text,type) => {
      this.props.handlercontent(text,type);
    }
    render() {
      const  activeItem  = this.state.activeItem;
      return (
        <div>
          <Menu attached='top' tabular>
            <Menu.Item name='text' active={activeItem === 'text'} onClick={this.handleItemClick} />
            <Menu.Item name='video' active={activeItem === 'video'} onClick={this.handleItemClick} />
            <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick} />
          </Menu>

          <Segment attached='bottom'>
            <AddContent name = {this.state.activeItem} handlertextinput ={this.handlertext}/>
          </Segment>
        </div>
      )
    }
  }
