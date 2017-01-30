import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

export default class AdminFeed extends React.Component{
  constructor(props){
    super(props);

  }
  render(){



    return(

      <Feed>
          <Feed.Label image='http://semantic-ui.com/images/avatar/small/joe.jpg' />
          <Feed.Content>
            <Feed.Summary>
              <a>Joe Henderson</a>
              <Feed.Date>3 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
            {this.props.text}
            </Feed.Extra>
          </Feed.Content>
      </Feed>
    );
  }
}
