import React from 'react';
import { Icon, Label, Menu, Input, Segment } from 'semantic-ui-react'
import AddContent from './addContent';

export default class ContentType extends React.Component{
  constructor(props){
    super(props);
    this.state = { activeItem: 'text' };
  }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handlertext = (text) => {
      
      this.props.handlercontent(text);
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

    // return(
    //     <Table celled>
    //       <Table.Body>
    //         <Table.Row>
    //           <Table.Cell>
    //             <Icon color='red' name='image'/>
    //             <span color='orange'>Image</span>
    //           </Table.Cell>
    //           <Table.Cell>
    //             <Icon color='red' name='video'/>
    //             <span color='orange'>Video</span>
    //           </Table.Cell>
    //           <Table.Cell>
    //             <Icon color='red' name='paragraph'/>
    //             <span color='orange'>Text</span>
    //           </Table.Cell>
    //         </Table.Row>
    //       </Table.Body>
    //     </Table>
    //
