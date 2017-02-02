import React from 'react';
import {Image, Icon, Divider, Grid} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import $ from 'jquery';
import Cookie from 'react-cookie';
import './homestyle.css';
export default class ClientHome extends React.Component {

    handleLogout()
    {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/signout',
            dataType: 'json',
            success: function(res) {
                Cookie.remove('authType');
                Cookie.remove('token');
                hashHistory.push('/');
            },
            error: function(err) {
                console.log('error', err);
            }
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
                            <center><Icon name='sign out' size='large' inverted id='iconstyle' onClick={this.handleLogout.bind(this)}/></center>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider horizontal inverted>
                        <h2>WELCOME &nbsp;&nbsp;TO &nbsp;&nbsp; GENIE
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
