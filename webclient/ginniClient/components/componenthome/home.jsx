import React from 'react';
import {
    Segment,
    Button,
    Menu,
    Image,
    Icon,
    Header,
    Divider,
    Dropdown,
    Grid,
    Rail,
    Label,
    Accordion,
    Card,
    List,
    Progress,MenuItem
} from 'semantic-ui-react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Link from 'react-router';
import './homestyle.css'

export default class FrontPage extends React.Component {
  componentDidMount()
      {
          this.getUserProfile();
      }
  logout() {
    var self=this;
    axios({
    url: 'http://localhost:8080/signout',
    method: 'GET',
  }).then(function(response) {
        window.localStorage.removeItem('token');
            hashHistory.push('/');
    }).catch(function(err) {
     console.log(err);
   });
  }

      onSubmitEmail(){

          hashHistory.push('/chat?email=' + this.props.location.query.email)
          /*<div>
            <LeftMenu email={this.state.email}/>
          </div>
          hashHistory.push('/chat');*/
      }
      getUserProfile() {
            axios({
                url: 'http://localhost:8080/userinfo',
                method: 'GET',
              }).then(function(response) {
                    localStorage.setItem('token', response.token);
                    // console.log("success");
                    // console.log(response);
                }).catch(function(err) {
                    //localStorage.setItem('token', 'Error');
                    // console.log(localStorage.getItem('token'));
                    // console.log("error");
                     console.log(err);
                })
            }
        }
          render() {

        return (

            <div style={{
                backgroundImage: "url('../../images/front.jpg')"
            }}>

                <Grid fluid>

                    <Grid.Row>

                        <a href=''><Icon name='sign out' size='large' inverted id='iconstyle' onClick={this.logout.bind(this)}/></a>


                    </Grid.Row>

                    <Divider  horizontal inverted><h2>WELCOME &nbsp;&nbsp; CLIENT</h2></Divider>


                          <Grid.Row divided horizontally>
                            <Grid.Column width={3}></Grid.Column>
    <Grid.Column width={4}>
      <a href="#/react"><Image src='../../images/react.jpg' size='small' avatar/><br/><br/></a>
      <a href="#/react"><h2 className="heading1">REACT</h2></a>
    </Grid.Column>
    <Grid.Column width={4}>
      <a href="#"><Image src='../../images/express.png' size='small' avatar   /><br/><br/><br/></a>
      <a href="#"><h2 className="heading2">EXPRESS</h2></a>
    </Grid.Column>
    <Grid.Column width={4}>
      <a href="#"><Image src='../../images/java.png' size='small' avatar /><br/><br/><br/></a>
      <a href="#"><h2 className="heading3">JAVA</h2></a>
    </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
  </Grid.Row>
  <Grid.Row divided horizontally>
  <Grid.Column width={3}></Grid.Column>
<Grid.Column width={4}>
<a href="#"><Image src='../../images/js.jpg' size='small' avatar /><br/><br/><br/></a>
<a href="#"><h2 className="heading4">JAVASCRIPT</h2></a>
</Grid.Column>
<Grid.Column width={4}>
<a href="#"><Image src='../../images/node.jpg' size='small' avatar   /><br/><br/></a>
<a href="#"><h2 className="heading5">NODE</h2></a>
</Grid.Column>
<Grid.Column width={4}>
<a href="#"><Icon  className="iconstyle" name="plus" size="massive" avatar/></a><br/><br/><br/><br/>
<a href="#"><h2 className="heading6">ADD BOT</h2></a>
</Grid.Column>
<Grid.Column width={2}></Grid.Column>
</Grid.Row>

                        <Grid.Column width={3}></Grid.Column>
                </Grid>
            </div>

        );
    }
}
