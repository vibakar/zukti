import React from 'react';
import {Feed, Label, Button, Icon,Modal} from 'semantic-ui-react';
import Embedly from 'react-embedly';
export default class BlogButton extends React.Component {
    constructor() {
        super();
        // this.selectBlog = this.selectBlog.bind(this);
    }
    // selectBlog() {
    //       var item = this.props.item;
    //       var blogURL = '';
    //       if (typeof(item) === 'string') {
    //           blogURL = item;
    //           console.log('string: ', blogURL);
    //       } else {
    //           blogURL = this.props.itemValue.toString();
    //           console.log('object: ', JSON.stringify(blogURL));
    //       }
    //       this.props.onSelectBlog(blogURL);
    // }
    render() {
      var item = this.props.item;
      var blogURL = '';
      if (typeof(item) === 'string') {
          blogURL = item;
          console.log('string: ', blogURL);
      } else {
          blogURL = this.props.itemValue.toString();
          console.log('object: ', JSON.stringify(blogURL));
      }
        return (
//         <div>
//             <Feed>
//               <Feed.Event>
//                 <Feed.Label image='../../images/geniebot.jpg'/>
//                 <Feed.Content>
//                     <Feed.Summary date={new Date().toLocaleString()} user={CodeAssistant.Interaction.name}/>
//                   </Feed.Content>
//                 </Feed.Event>
//               </Feed>
// </div>
          <Feed>
<Embedly url= {blogURL} apiKey="73f538bb83f94560a044bc6f0f33c5f6"/>
          </Feed>

        );
    }
}
