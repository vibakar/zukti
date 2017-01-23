import React from 'react';
import {
    Image,
    Icon,
    Divider,
    Grid
} from 'semantic-ui-react';
import Link from 'react-router';
import './homestyle.css';
// const trigger = (
//     <span>
//         <Header as='h2' inverted>
//             <Image shape='circular' src='http://semantic-ui.com/images/avatar2/large/patrick.png' inverted/> {' '}Patrick
//         </Header>
//     </span>
// )
export default class FrontPage extends React.Component {
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
                      <a href='#/'><center><Icon name='sign out' size='large' inverted id='iconstyle'/></center></a>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider horizontal inverted><h2>WELCOME &nbsp;&nbsp; ADMIN</h2></Divider>
                          <Grid.Row divided vertically>
                            <Grid.Column width={2}></Grid.Column>
    <Grid.Column width={4} centered={'true'}>
      <Grid.Row>
      <center><a href="#/react"><Image src='../../images/react.jpg' size='small' avatar/></a></center></Grid.Row>
      <Grid.Row>
      <center><a href="#/react"><h2 className="heading1">REACT</h2></a></center></Grid.Row>
    </Grid.Column>
    <Grid.Column width={4}>
      <Grid.Row>
      <center><a href="#"><Image src='../../images/express.png' size='small' avatar  /></a></center></Grid.Row>
      <Grid.Row>
      <center><a href="#"><h2 className="heading2">EXPRESS</h2></a></center></Grid.Row>
    </Grid.Column>
    <Grid.Column width={4}>
      <Grid.Row>
      <center><a href="#"><Image src='../../images/java.png' size='small' avatar /></a></center></Grid.Row>
      <Grid.Row>
      <center><a href="#"><h2 className="heading3">JAVA</h2></a></center></Grid.Row>
    </Grid.Column>
<Grid.Column width={2}></Grid.Column>
  </Grid.Row>
  <Grid.Row divided vertically>
  <Grid.Column width={2}></Grid.Column>
<Grid.Column width={4}>
  <Grid.Row>
  <center><a href="#"><Image src='../../images/js.jpg' size='small' avatar /></a></center></Grid.Row>
  <Grid.Row>
  <center><a href="#"><h2 className="heading4">JAVASCRIPT</h2></a></center></Grid.Row>
</Grid.Column>
<Grid.Column width={4}>
  <Grid.Row>
  <center><a href="#"><Image src='../../images/node.jpg' size='small' avatar/></a></center></Grid.Row>
  <Grid.Row>
  <center><a href="#"><h2 className="heading5">NODE</h2></a></center></Grid.Row>
</Grid.Column>
<Grid.Column width={4}>
  <Grid.Row>
  <center><a href="#"><Image src='../../images/plus2.jpg' size='small' avatar/></a></center></Grid.Row>
  <Grid.Row>
  <center><a href="#"><h2 className="heading6">ADD BOT</h2></a></center></Grid.Row>
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
