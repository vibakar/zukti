import React from 'react';
import {Feed, Icon,Label} from 'semantic-ui-react';
import Axios from 'axios';
import AssistantGinniMoreBlogsView from './assistantGinniMoreBlogsView';
import AssistantGinniOptions from './assistantGinniOptions';
import UnfurlLink from './UnfurlLink';
import './chatcontainerstyle.css';

export default class AssistantGinniMixedReply extends React.Component {
  constructor(props) {
      super(props);
      this.displayMoreBlogs =this.displayMoreBlogs.bind(this);
  }
  displayMoreBlogs(){
    let ginniReply = [];
    let blogsResponseArray = this.props.blogs;
    blogsResponseArray.shift();
    blogsResponseArray.forEach((blog)=>{
      ginniReply.push(<AssistantGinniMoreBlogsView question={this.props.question}  value={blog.value}/>)
    })
    this.props.handleGinniReply(ginniReply);
  }
    render() {
      console.log(this.props);
      console.log('inside url display');
      let blogUrl = this.props.blogs[0].value;
      console.log('top rated blog');
      console.log(blogUrl);
        return (
            <Feed id="ginniview">
                <Feed.Event>
                    <Feed.Label image='../../images/geniebot.jpg'/>
                    <Feed.Content>
                        <Feed.Summary date={new Date().toLocaleString()} user='Genie'/>
                        <Feed.Extra images>
                            <UnfurlLink url ={blogUrl}/>
                        </Feed.Extra>
                        <Feed.Extra>
                          <Label.Group >
                              {this.props.blogs.length > 1
                                  ? <Label onClick={this.displayMoreBlogs} basic color='orange' id='cursor'>View more blogs ({this.props.blogs.length-1})</Label>
                                  : ''}
                          </Label.Group>
                        </Feed.Extra>
                        <AssistantGinniOptions question={this.props.question} type='blog' value={blogUrl}/>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
