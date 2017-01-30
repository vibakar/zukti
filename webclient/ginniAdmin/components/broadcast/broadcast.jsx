import React from 'react';
import {
    Grid,
    Button,
    Icon,
    List,
    Image,
    Header
} from 'semantic-ui-react';
import MessagesSend from './messagesSend';
import ContentType from './contentType';

export default class BroadCast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: []
        }
    }
    handlerfrom = (text) => {
        this.state.content.push(text);
        this.setState({content:  this.state.content});

    }
    render() {
        return (
            <div style={{
                backgroundImage: "url('../../images/wall.jpg')",
                height: '100%'
            }}>
                <Grid columns={2} style={{
                    width: '95%',
                    margin: 'auto'
                }} divided>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Header as='h1' color='blue'>Send Message</Header>
                            <ContentType handlercontent={this.handlerfrom}/>

                        </Grid.Column>
                        <Grid.Column width={10}>
                            <MessagesSend send={this.state.content}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
