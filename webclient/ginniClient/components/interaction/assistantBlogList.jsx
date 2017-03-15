import React from 'react';
import {Feed, Label, Button, Icon, Card, Modal} from 'semantic-ui-react';
import BlogButton from './blogButton';
import UnfurlLink from './unfurlLink';
export default class BlogList extends React.Component {
    constructor() {
        super();
        
    }

    render() {
      let blogs = this.props.blogList.map((item, index)=>{
      console.log('lists: ', JSON.stringify(item));
          return <BlogButton item={item} itemValue={item.value} />
      });
        return(
          <Card.Group>
            {blogs}
          </Card.Group>
        );
}
}
