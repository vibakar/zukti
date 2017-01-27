import React from 'react';
import {Image, Icon, Divider, Grid} from 'semantic-ui-react';
import Link from 'react-router';
import './homestyle.css';
import axios from 'axios';
// const trigger = (
//     <span>
//         <Header as='h2' inverted>
//             <Image shape='circular' src='http://semantic-ui.com/images/avatar2/large/patrick.png' inverted/> {' '}Patrick
//         </Header>
//     </span>
// )
export default class FrontPage extends React.Component {
    componentDidMount()
    {
        this.getUserProfile();
    }
    /*logoutsession() {
        window.localStorage.removeItem('token');
        hashHistory.push('/a');
    }*/

    logout() {
        var self = this;
        axios({url: 'http://localhost:8080/signout', method: 'GET'}).then(function(response) {
            window.localStorage.removeItem('token');
            hashHistory.push('/');
        }).catch(function(err) {
            console.log(err);
        })
    }

    getUserProfile() {
        axios({url: 'http://localhost:8080/userinfo', method: 'GET'}).then(function(response) {
            localStorage.setItem('token', response.token);
            // console.log("success");
            // console.log(response);
        }).catch(function(err) {
            localStorage.setItem('token', 'Error');
            // console.log(localStorage.getItem('token'));
            // console.log("error");
            // console.log(err);
        })
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
                    <h2>WELCOME &nbsp;&nbsp; ADMIN</h2>
                </Divider>
                <Grid.Row divided vertically>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={4} centered={'true'}>
                        <Grid.Row>
                            <center>
                                <a href="#/react"><Image src='../../images/react.jpg' size='small' avatar/></a>
                            </center>
                        </Grid.Row>
                        <Grid.Row>
                            <center>
                                <a href="#/react">
                                    <h2 className="heading1">REACT</h2>
                                </a>
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
                    <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                <Grid.Row divided vertically>
                    <Grid.Column width={2}></Grid.Column>
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
                <Grid.Row></Grid.Row>
                <br/>
                <br/>
            </Grid>
        </div>
    );
}
}
