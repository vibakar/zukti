import React from 'react';
import {Grid, Divider} from 'semantic-ui-react';
import Axios from 'axios';
import ViewUserChat from './viewUserChat';
import './usertable.css';
import {Scrollbars} from 'react-custom-scrollbars';
import UserAvatar from './userAvatar';

export default class UserTable extends React.Component
{
    constructor() {
        super();
        // setting the default values for some state variables
        this.state = {
            name: [],
            email: [],
            
        };
    }

    render() {

        let user = this.props.userinformation.map(function(newsdata) {
            let textStyle = {
                paddingTop: '7px',
                paddingLeft: '2px'
            };

            return (
                <div id='eachcardstyle'>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <UserAvatar loginStatus={newsdata.local.loggedinStatus} photo={newsdata.local.photos} name={newsdata.local.name} email={newsdata.local.email}></UserAvatar>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <div style={textStyle}>
                                    <h4>
                                        <b style={{
                                            margin: '0px'
                                        }}>{newsdata.local.name}</b>
                                    </h4>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div style={textStyle}>
                                    <b style={{
                                        color: 'blue'
                                    }}>{newsdata.local.email}</b>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <ViewUserChat userEmail={newsdata.local.email}/>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={1}/>
                        </Grid.Row>
                    </Grid>
                </div>
            );
        }.bind(this));

        return (
            <div style={{
                backgroundImage: 'url("../../images/background.jpg")',
                marginTop: '1%',
                height: '100%'
            }}>
                <Grid divided='vertically'>
                    <Grid.Row columns={3}>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={14}>
                            <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
                                display: 'none',
                                position: 'right'
                            }}/>} autoHeight autoHeightMin={554}>

                                <div style={{
                                    width: '98%',
                                    height: '50%',
                                    marginTop: '35px'
                                }}>
                                    <h3 style={{
                                        color: 'red',
                                        fontStyle: 'bold'
                                    }}>USER DETAILS</h3>

                                    <Divider/> {user}
                                </div>
                            </Scrollbars>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        );
    }
}
