import React from 'react';
import {Grid, Button, Icon, List,Image,Header} from 'semantic-ui-react';
import MessagesSend from './messagesSend';
import ContentType from './contentType';
import AddContent from './addContent';
export default class BroadCast extends React.Component {
    render() {
        return (
            <Grid  columns={2} style={{
                width: '95%',
                margin: 'auto'
            }} divided>
                <Grid.Row>
                    <Grid.Column  width={6}>
                        <Header as='h1' color='blue'>Send Message</Header>
                        <ContentType/>
                        <AddContent/>
                    </Grid.Column>
                    <Grid.Column  width={10}>
                        <MessagesSend/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
);
}
}
