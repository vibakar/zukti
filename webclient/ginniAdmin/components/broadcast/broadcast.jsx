import React from 'react';
import {
    Grid,
    Button,
    Icon,
    List,
    Image,
    Header
} from 'semantic-ui-react';
import Cookie from 'react-cookie';
import ContentType from './contentType';
import {Scrollbars} from 'react-custom-scrollbars';
import MessageView from './messageView';
import NoFeedMessage from './noFeedMessage';

export default class BroadCast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            username:'Admin'
        }
    }
    componentDidMount(){
      let username = Cookie.load('username');
      if (username) {
          this.state.username = username;
      }
    }
    displayInputContent = (content) => {
        this.state.content.unshift(<MessageView username={this.state.username} dispData={content}/>)
        this.setState({content:this.state.content});
    }
    render() {
        return (
            <div style={{
                backgroundImage: "url('http://exploretheme.com/wp-content/uploads/2015/03/restaurant-icons.jpg')",
                height: '100%'
            }}>
                <Grid columns={2} style={{
                    width: '100%',
                    'margin-left':'5px',
                    margin: 'auto'
                }} divided>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Header as='h1' color='blue'>Send Message</Header>
                            <ContentType handlercontent={this.displayInputContent}/>
                        </Grid.Column>
                        <Grid.Column style={{'margin-top':'20px'}} width={9}>
                          <div>
                              <Scrollbars  renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
                                  display: "none",
                                  position: "right",
                                  minHeight: "516px"
                              }}/>} autoHeight autoHeightMin={550}>
                                  <div id='messageChat'>
                                    {this.state.content.length==0?<NoFeedMessage/>:''}
                                    {this.state.content}
                                  </div>
                              </Scrollbars>
                          </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
