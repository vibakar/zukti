import React from 'react';
import {Button, Image, Modal, Divider, Form, Icon} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import Dropzone from 'react-dropzone';
import './clientprofile.css';
export default class ClientProfile extends React.Component
{
    constructor(props) {
       super(props);
       this.state = {
           file: []
};
   }
show = (size) => () => this.setState({ size, open: true })
  onOpenClick = () => {
       this.refs.dropzone.open();
   }
 /* function to attach the file to the server*/
   dropHandler = (file) => {
       var photo = new FormData();
       photo.append('IMG', file[0]);
       this.setState({file: file});
       }
    close = () => hashHistory.push('/chat');
    render() {
        const {open, size} = this.state;
        return (
            <Modal size='small' open={true} onClose={this.close} closeOnRootNodeClick={false} closeIcon='close'>
                <Modal.Header id="updateheader"><Icon name='user'/>Edit Profile</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium'>
                    <Dropzone ref='dropzone' multiple={false} accept={'image/*'} onDrop={this.dropHandler}>
              <div>
                  <div>{this.state.file.map((file) => <img src={file.preview} style={{
                          height: 204,
                          width: 204
                      }}/>)}</div>
              </div>
          </Dropzone><br/>
          <button size="small" color="teal" type="button" onClick={this.onOpenClick}>
              Change Photo
          </button></Image>
                    <Modal.Description id="clientmodal">
                        <Form>
                            <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='email' disabled/>
                            </Form.Field>
                        </Form>
                        <Divider/>
                        <Button onClick={this.show('small')} color='blue'>Save</Button>
                        <Modal size={size} open={open}>
                          <Modal.Header id="updateheader"><h2>
                      <Image src='../../images/thumb.gif' size="small" avatar/>Updated Suceessfully</h2>
                      </Modal.Header>
                      <Modal.Actions>
                                <Button color='gray' onClick={this.close}>
                            <a href="#/left"><Button.Content visible  ><Icon name='thumbs up'/>OK</Button.Content>
                          </a></Button>
                              </Modal.Actions>
                        </Modal>
                        <a href="#/left"><Button color='red'>cancel</Button></a>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}
