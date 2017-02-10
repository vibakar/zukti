import React from 'react';
import {Feed, Icon,Label} from 'semantic-ui-react';
import Axios from 'axios';
import UnfurlLink from './unfurlLink';
export default class BookmarkView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          saved:false
        }
        this.deleteBookmark = this.deleteBookmark.bind(this);
    }
    deleteBookmark(e,data) {
      let id= data.id;
      Axios.delete(`bookmarks/${id}`).then((response) => {
        console.log(response);
            this.props.handlerRemoveBookmarkFromView(id);
        }).catch((error) => {
          console.log(error);
        });
    }
    render() {
        let bookmark = this.props.bookmark;
        let question = bookmark.question;
        let savedResponse = bookmark.savedResponse;
        let responseType = bookmark.responseType;
        let date = bookmark.date;
        let id =bookmark._id;
        let responseView;
        if (responseType === 'text') {
            responseView = savedResponse;
        } else if (responseType === 'blog') {
            responseView = <UnfurlLink url={savedResponse}/>
        } else if (responseType === 'video') {
            responseView = <UnfurlLink url={savedResponse}/>
        }
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User >{question}</Feed.User>
                            <Feed.Date >{date}</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra>
                            {responseView}
                        </Feed.Extra>
                        <Label as='a' onClick={this.deleteBookmark} id={id}>
                            <Icon name='delete'/>
                        </Label>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
