import React from 'react'
import { Accordion, Icon, Button } from 'semantic-ui-react'
import Embedly from 'react-embedly';

export default class Display extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      display:''
    }
    this.displayBlog = this.displayBlog.bind(this);
    this.displayVideo = this.displayVideo.bind(this);
  }
  displayVideo(){
  
  }
  displayBlog(){
  //  return (<Embedly url={this.props.answers.blogAnswer} apiKey="73f538bb83f94560a044bc6f0f33c5f6"/>)
    console.log(this.props.answers.blogAnswer);
  }
  render(){

    return(
      <div>
      <Accordion styled style={{marginLeft:'200px'}}>
    <Accordion.Title>
      <Icon name='dropdown' />
      sdgdsfgfgdfgdfg
    </Accordion.Title>
    <Accordion.Content fluid>

    <br/><br/>
  <Button.Group color='blue'>
      <Button onClick={this.displayBlog}>Blogs</Button>
      <Button onClick={this.displayVideo}>Videos</Button>
  </Button.Group>
  <br/><br/>
  sdfgdsgfdsf
    </Accordion.Content>
    </Accordion>
    </div>
    )
  }
}
