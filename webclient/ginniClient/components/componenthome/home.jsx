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
    Progress,MenuItem
} from 'semantic-ui-react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Link from 'react-router';
import './homestyle.css'
const trigger = (
    <span>
        <Header as='h2' inverted>
            <Image shape='circular' src='http://semantic-ui.com/images/avatar2/large/patrick.png' inverted/> {' '}Patrick
        </Header>
    </span>
)
export default class FrontPage extends React.Component {
    render() {
        return (

            <div style={{
                backgroundImage: "url('../../images/front.jpg')"
            }}>

                <Grid fluid>

                    <Grid.Row>
                        <a href=''><Icon name='sign out' size='large' inverted id='iconstyle'/></a>
                    </Grid.Row>

                    <Divider  horizontal inverted><h2>WELCOME &nbsp;&nbsp; CLIENT</h2></Divider>


                          <Grid.Row divided horizontally>
                            <Grid.Column width={3}></Grid.Column>
    <Grid.Column width={4}>
      <a href="#/react"><Image src='../../images/react.jpg' size='small' avatar/><br/><br/></a>
      <a href="#/react"><h2 className="heading1">REACT</h2></a>
    </Grid.Column>
    <Grid.Column width={4}>
      <a href="#"><Image src='../../images/express.png' size='small' avatar   /><br/><br/><br/></a>
      <a href="#"><h2 className="heading2">EXPRESS</h2></a>
    </Grid.Column>
    <Grid.Column width={4}>
      <a href="#"><Image src='../../images/java.png' size='small' avatar /><br/><br/><br/></a>
      <a href="#"><h2 className="heading3">JAVA</h2></a>
    </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
  </Grid.Row>
  <Grid.Row divided horizontally>
  <Grid.Column width={3}></Grid.Column>
<Grid.Column width={4}>
<a href="#"><Image src='../../images/js.jpg' size='small' avatar /><br/><br/><br/></a>
<a href="#"><h2 className="heading4">JAVASCRIPT</h2></a>
</Grid.Column>
<Grid.Column width={4}>
<a href="#"><Image src='../../images/node.jpg' size='small' avatar   /><br/><br/></a>
<a href="#"><h2 className="heading5">NODE</h2></a>
</Grid.Column>
<Grid.Column width={4}>
<a href="#"><Icon  className="iconstyle" name="plus" size="massive" avatar/></a><br/><br/><br/><br/>
<a href="#"><h2 className="heading6">ADD BOT</h2></a>
</Grid.Column>
<Grid.Column width={2}></Grid.Column>
</Grid.Row>

                        <Grid.Column width={3}></Grid.Column>
                </Grid>
            </div>

        );
    }
}
