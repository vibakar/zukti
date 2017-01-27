import React from 'react';
import {Form, Input} from 'semantic-ui-react';
export default class AddContent extends React.Component {
    constructor(props) {
        super();
    }
    render() {
      switch('image'){
        case 'image':{
          return <Form rounded>
            <Input type="file" name="pic" accept="image/*"/>
           <Input color='green' type="submit"/>
           </Form>
        }
        case 'video':{
          return <Form>
            <Input type="file" name="video" accept="video/*"/>
           <Input type="submit"/>
           </Form>

        }
        case 'text':{
          return <Form>
            <Input type="text" name="text" />
           <Input type="submit"/>
           </Form>
        }
      }
    }
  }
