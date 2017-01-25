import React from 'react'
import {Sidebar, Menu,Grid} from 'semantic-ui-react';
import {Link} from 'react-router';
export default class userBots extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (

            <div class="ui left fixed inverted vertical menu" style={{
                position: 'fixed',
                top: '0px',
                bottom: '0px',
                left: '0px',
                width: '250px',
                'padding-bottom': '1em',
                background: 'rgb(27, 28, 29)',
                'overflow-y': 'scroll',
                'overflow-x':'hidden'
            }}>
            <Grid>
                <Grid.Row>
                        <div>
                            <Sidebar as={Menu} animation='scale down' width='thin' visible={true} icon='labeled' vertical inverted>
                                <Link to='/registeredusers'>
                                    <Menu.Item name='React'></Menu.Item>
                                </Link><br/>
                                <Link to='/registeredusers'>
                                    <Menu.Item name='Express'></Menu.Item>
                                </Link><br/>
                                <Link to='/registeredusers'>
                                    <Menu.Item name='Node'></Menu.Item>
                                </Link><br/>
                                <Link to='/registeredusers'>
                                    <Menu.Item name='Java'></Menu.Item>
                                </Link><br/>
                                <Link to='/registeredusers'>
                                    <Menu.Item name='JavaScript'></Menu.Item>
                                </Link><br/>
                                <Link to='/'>
                                    <Menu.Item name='Train Bot'></Menu.Item>
                                </Link><br/>
                            </Sidebar>
                        </div>
                  </Grid.Row>
            </Grid>
                  </div>
                  );
                }
              }
