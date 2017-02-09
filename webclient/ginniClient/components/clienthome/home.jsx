import React from 'react';
import {Image, Icon, Divider, Grid,Popup} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import Axios from 'axios';
import Cookie from 'react-cookie';
import './homestyle.css';
export default class ClientHome extends React.Component {

    handleLogout()
    {
      Axios({
              method: 'GET',
              url: 'http://localhost:8080/signout',
              data: 'json'
            }).then(function (response) {
              Cookie.remove("authType");
              Cookie.remove("token");
              hashHistory.push('/');
            })
             .catch(function (error) {
                 console.log("error",err);
            });
    }
    onSubmitEmail() {
        hashHistory.push('/chat')
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
                            <Popup offset={-140} positioning='left center' trigger={<center><Icon name='sign out' size='large' inverted id='iconstyle' onClick={this.handleLogout.bind(this)}/></center>} content='Logout'/>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider horizontal inverted>
                        <h2 id='headsparkle'>I AM GENIE GIVING DAZZLING SOLUTIONS <br/>TO YOUR REACT PROBLEMS
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
                                        <h2 className="heading4">JAVA SCRIPT</h2>
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
