import React from 'react'
import { Icon, Table,Grid,Image ,Header,Card} from 'semantic-ui-react';
import {Scrollbars} from 'react-custom-scrollbars';
import { Button, Modal,Rating ,Menu, Comment, Popup,List} from 'semantic-ui-react';
import './usertable.css';
export default class UserTable extends React.Component {
  render() {
return (
  <div id="fullbackground" style={{backgroundImage: "url('../../images/wall.jpg')"}}>
    <Grid divided="vertically">
      <Grid.Row columns={3}>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={14}>
        <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>User</Table.HeaderCell>
          <Table.HeaderCell>Email_Id</Table.HeaderCell>
          <Table.HeaderCell>Details</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body id="tablecolor">
        <Table.Row >
          <Table.Cell>
            <Header as='h4' image>
            <Image src='http://semantic-ui.com/images/avatar2/small/lena.png' shape='rounded' size='mini' />
            <Header.Content>
              Jimmy
            </Header.Content>
          </Header>
          </Table.Cell>
          <Table.Cell>
            <List>
              <List.Item as='a'>  Jimmy@gmail.com</List.Item>
            </List>
          </Table.Cell>
          <Table.Cell >
            <Modal trigger={<List>
                <List.Item as='a'>View More </List.Item> </List>} closeIcon='close'>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image>
  <Modal.Description fluid>
      <Image  size='small' src='http://semantic-ui.com/images/avatar2/small/lena.png' />
        <h5>Joined on :25/12/2016</h5>
        <h5>Recent Log in:Today</h5>
        <h5>No of Queries :400</h5>
        <h5>Bots:React</h5>
      </Modal.Description>
      <Card id="cardstyle">
      <Modal.Description>
          <Header id="header"dividing>Queries</Header>
          <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
              display: "none"
          }}/>} autoHeight autoHeightMin={400}>
          <Comment.Group>
              <Comment id="commentstyle">
                  <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg'/>
                  <Comment.Content >
                      <Comment.Author as='a'>Elliot Fu</Comment.Author>
                      <Comment.Metadata>
                          <div>Yesterday at 12:30AM</div>
                      </Comment.Metadata>
                      <Comment.Text>
                          <p>This has been very useful for my research. Thanks as well</p>
                      </Comment.Text>
                      <Comment.Actions>
                        <Popup trigger={< Icon circular name = 'like outline' color='blue'/>} content='add' size='mini'/>
                        <Popup trigger={< Icon circular name = 'dislike outline' color='blue' />} content='reject' size='mini'/>
                      </Comment.Actions>
                  </Comment.Content>
                  <Comment.Group>
                      <Comment>
                          <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg'/>
                          <Comment.Content>
                              <Comment.Author as='a'>Jenny Hess</Comment.Author>
                              <Comment.Metadata>
                                  <div>Just now</div>
                              </Comment.Metadata>
                              <Comment.Text>
                                  Elliot you are always so right :slightly_smiling_face:
                              </Comment.Text>
                          </Comment.Content>
                      </Comment>
                  </Comment.Group>
              </Comment>
              <Comment id="commentstyle" >
                  <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg'/>
                  <Comment.Content>
                      <Comment.Author as='a'>Elliot Fu</Comment.Author>
                      <Comment.Metadata>
                          <div>Yesterday at 12:30AM</div>
                      </Comment.Metadata>
                      <Comment.Text>
                          <p>This has been very useful for my research. Thanks as well!</p>
                      </Comment.Text>
                      <Comment.Actions>
                        <Popup trigger={< Icon circular name = 'like outline' color='blue'/>} content='add' size='mini'/>
                        <Popup trigger={< Icon circular name = 'dislike outline' color='blue' />} content='reject' size='mini'/>
                      </Comment.Actions>
                  </Comment.Content>
                  <Comment.Group>
                      <Comment>
                          <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg'/>
                          <Comment.Content>
                              <Comment.Author as='a'>Jenny Hess</Comment.Author>
                              <Comment.Metadata>
                                  <div>Just now</div>
                              </Comment.Metadata>
                              <Comment.Text>
                                  Elliot you are always so right :slightly_smiling_face:
                              </Comment.Text>
                          </Comment.Content>
                      </Comment>
                  </Comment.Group>
              </Comment>
          </Comment.Group>
          <Menu  pagination id="menustyle">
            <Menu.Item as='a' icon>
              <Icon name='left chevron' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='right chevron' />
            </Menu.Item>
          </Menu>
        </Scrollbars>
          </Modal.Description>
          </Card>
    </Modal.Content>
    <Modal.Actions>
      <Button>
        ok <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>jamie@gmail.com</Table.Cell>
          <Table.Cell >
            view more
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>jill@gmail.com</Table.Cell>
          <Table.Cell>view more</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </Grid.Column>
    </Grid.Row>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/>

  </Grid>
    </div>
  )
}
}
