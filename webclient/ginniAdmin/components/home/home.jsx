import React from 'react';
import {
    Image,
    Icon,
    Divider,
    Grid
} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import './homestyle.css';
export default class FrontPage extends React.Component {
    componentDidMount()
    {
        this.getUserProfile();
    }
    logout() {
      $.ajax({
      url: 'http://localhost:8080/signout',
      type: 'GET',
      dataType:'text',
      success: function(response) {
          window.localStorage.removeItem('token');
              hashHistory.push('/');
      }.bind(this),
      error: function(err) {
        console.log(err);
      }
  });
   }
   onSubmitEmail() {
       hashHistory.push('/react')
   }
    getUserProfile() {
        $.ajax({
            url: 'http://localhost:8080/userinfo',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                localStorage.setItem('token', response.token);
                // console.log("success");
                // console.log(response);
            },
            error: function(err) {
                localStorage.setItem('token', 'Error');
                // console.log(localStorage.getItem('token'));
                // console.log("error");
                // console.log(err);
            }
        });
    }
    render() {
        return (
            <div style={{
                backgroundImage: "url('../../images/homepage.jpg')"
            }}>
            <Grid>
            <Grid.Row/>
            <Grid.Row>
            <Grid.Column width={2}/>
            <Grid.Column width={10}/>
            <Grid.Column width={4}>
            <center><Icon name='sign out' size='large' inverted id='iconstyle' onClick={this.logout.bind(this)}/></center>
            </Grid.Column>
            </Grid.Row>
            <Divider horizontal inverted>
            <h2>WELCOME &nbsp;&nbsp;ADMIN &nbsp;&nbsp;
            </h2>
            </Divider>
            <Grid.Row divided vertically>
            <Grid.Column width={2}/>
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
            <Grid.Column width={2}/>
            </Grid.Row>
            <Grid.Row/>
            <Grid.Row/>
            <Grid.Row/>
            <Grid.Row/><br/><br/>
            </Grid>
            </div>
            );
}
}
