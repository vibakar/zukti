import React from 'react';
import Axios from 'axios';
import TextAnswer from './answerContentType/textAnswer';
import VideoAnswer from './answerContentType/videoAnswer';
import BlogAnswer from './answerContentType/blogAnswer';
import Config from '../../../../config/url';

export default class ReplyContentInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.replyContentType) {
            case 'text':
                {
                    return <TextAnswer texts={this.props.texts} handlerForSaveAnswerToParentState={this.props.handlerForSaveAnswerToParentState} />
                }
            case 'video':
                {
                    return <VideoAnswer videos={this.props.videos} handlerForSaveAnswerToParentState={this.props.handlerForSaveAnswerToParentState}/>
                }
            case 'blog':
                {
                  return <BlogAnswer blogs={this.props.blogs} handlerForSaveAnswerToParentState={this.props.handlerForSaveAnswerToParentState}/>
                }
        }
    }
}
