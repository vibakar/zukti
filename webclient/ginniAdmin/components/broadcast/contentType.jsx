import React from 'react';
import { Icon, Label, Menu, Input, Segment,Feed } from 'semantic-ui-react'
import AddContent from './addContent';
import Embedly from 'react-embedly';

export default class ContentType extends React.Component{
  constructor(props){
    super(props);
  }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleAdminInput = (text,type) => {
      var urlRegex =/(\b(?:(https?|ftp):\/\/)?((?:www\d{0,3}\.)?([a-z0-9.-]+\.(?:[a-z]{2,4}|museum|travel)(?:\/[^\/\s]+)*))\b)/gi;
      var match = text.match(urlRegex);
      var inputTokens = text.split(' ');
      var str=[];
      var match =match||[];
      inputTokens.forEach((item)=>{
          if(match.indexOf(item)>-1){
            str.push(<div>
                <Embedly url={item} apiKey="73f538bb83f94560a044bc6f0f33c5f6"/><a>{item}</a>
            </div>);
          }
          else{
            str.push(item+' ');
          }
        })
        this.props.handlercontent(str);
      }
    render() {
      return (
        <div>
          <Menu attached='top' tabular>
            <Menu.Item name='Message' active='Message' onClick={this.handleItemClick} />
            </Menu>
          <Segment attached='bottom'>
            <AddContent handleAdminInput ={this.handleAdminInput}/>
          </Segment>
        </div>
      )
    }
  }
