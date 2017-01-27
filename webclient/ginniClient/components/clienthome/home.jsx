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
    Progress,
    MenuItem
} from 'semantic-ui-react';
import {Link, hashHistory} from 'react-router';
import LeftMenu from '../leftmenu/leftmenu.jsx';
import './homestyle.css';
import axios from 'axios';
// const trigger = (
//     <span>
//         <Header as='h2' inverted>
//             <Image shape='circular' src='http://semantic-ui.com/images/avatar2/large/patrick.png' inverted/> {' '}Patrick
//         </Header>
//     </span>
// )
export default class ClientHome extends React.Component {
constructor(props){
  super(props);
  this.state={
      email: " "
  };
      this.setState({email:this.props.emailId});

}
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

    render() {
        return (
            <div style={{
                backgroundImage: "url('../../images/homepage.jpg')"
            }}>
            <Grid>
            <Grid.Row></Grid.Row>
            <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={10}></Grid.Column>
            <Grid.Column width={4}>
            <center><Icon name='sign out' size='large' inverted id='iconstyle' onClick={this.logout.bind(this)}/></center>
            </Grid.Column>
            </Grid.Row>
            <Divider horizontal inverted>
            <h2>WELCOME &nbsp;&nbsp;TO &nbsp;&nbsp; GENIE
            </h2>
            </Divider>
            <Grid.Row divided vertically>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={4} centered={'true'}>
            <Grid.Row>
            <center>
            <Image src='../../images/react.jpg' size='small' avatar onclick={this.onSubmitEmail.bind(this)}/>
            </center>
            </Grid.Row>
            <Grid.Row>
            <center>
                <h2 className="heading1" onClick={this.onSubmitEmail.bind(this)}>REACT</h2>
            </center>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
            <Grid.Row>
            <center>
            <a href="#"><Image src='../../images/express.png' size='small' avatar/></a>
            </center>
            </Grid.Row>
            <Grid.Row>
            <center>
            <a href="#">
            <h2 className="heading2">EXPRESS</h2>
            </a>
            </center>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
            <Grid.Row>
            <center>
            <a href="#"><Image src='../../images/java.png' size='small' avatar/></a>
            </center>
            </Grid.Row>
            <Grid.Row>
            <center>
            <a href="#">
            <h2 className="heading3">JAVA</h2>
            </a>
            </center>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={2}/>
            </Grid.Row>
            <Grid.Row divided vertically>
            <Grid.Column width={2}/>
            <Grid.Column width={4}>
            <Grid.Row>
            <center>
            <a href="#"><Image src='../../images/js.jpg' size='small' avatar/></a>
            </center>
            </Grid.Row>
            <Grid.Row>
            <center>
            <a href="#">
            <h2 className="heading4">JAVASCRIPT</h2>
            </a>
            </center>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
            <Grid.Row>
            <center>
            <a href="#"><Image src='../../images/node.jpg' size='small' avatar/></a>
            </center>
            </Grid.Row>
            <Grid.Row>
            <center>
            <a href="#">
            <h2 className="heading5">NODE</h2>
            </a>
            </center>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
            <Grid.Row>
            <center>
            <a href="#"><Image src='../../images/plus2.jpg' size='small' avatar/></a>
            </center>
            </Grid.Row>
            <Grid.Row>
            <center>
            <a href="#">
            <h2 className="heading6">ADD BOT</h2>
            </a>
            </center>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row><br/><br/>
            </Grid>
            </div>
            );
}
}
