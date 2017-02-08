import React from 'react'
import {Feed, Icon, Image} from 'semantic-ui-react'
import Cookie from 'react-cookie';
import Axios from 'axios';
export default class MessageView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          photo:'',
          name:'',
          email:''
        }
        this.setImage= this.setImage.bind(this);
    }
    componentDidMount(){
      let self=this;
      Axios({
          url: "http://localhost:8080/userProfile",
          method: 'GET',
          data: 'json'
        }).then(function (response) {
          self.setImage(response.data.user.local.photos);
            })
         .catch(function (error) {
              console.log("error", error);
        });
    }
    setImage(image){
      this.setState({photo: image})
      console.log(this.state.photo);
    }
    render() {
      //alert(this.state.photo);
      console.log("entered"+this.state.photo);
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <Image avatar src={require('../../../../webserver/images/defultImage.jpg')}/>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>{this.props.username}</Feed.User>
                            <Feed.Date>{this.props.date}</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra text>
                            {this.props.dispData}
                        </Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
