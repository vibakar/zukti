import React from 'react';
import {
    Button,
    Image,
    Modal,
    Divider,
    Form,
    Icon
} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './clientprofile.css';
export default class ClientProfile extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            file: [],
            email: '',
            firstname: '',
            lastname:''
        };
        this.OnSubmitData = this.OnSubmitData.bind(this);
        this.show = this.show.bind(this);
    };
    profile()
    {
        hashHistory.push('/chat')
    }
    componentDidMount() {
      var self=this;
        axios({
            url: ' http://localhost:8080/clientinformation',
            method: 'get'
        }).then(function(response) {
            console.log(response.data);
            self.setState({email:response.data.email});
            self.setState({firstname:response.data.firstname});
            self.setState({lastname:response.data.lastname});

        }).catch(function(err) {
            // alert("bjhbj"+err);
        });
    }
    OnSubmitData(e, value) {
        const self = this;
        e.preventDefault();
        axios({
            url: ' http://localhost:8080/updateprofile',
            method: 'put',
            data: {
                email: this.state.email,
                firstname: value.formData.firstname,
                lastname: value.formData.lastname
            }
        }).then(function(msg) {
            show('small');
        }).catch(function(err) {
            // alert("update"+err);
        })
    }
    show = (size) => () => this.setState({size, open: true})
    onOpenClick = () => {
        this.refs.dropzone.open();
    }
    /* function to attach the file to the server*/
    dropHandler = (file) => {
        let photo = new FormData();
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
                        </button>
                    </Image>
                    <Modal.Description id="clientmodal">
                        <Form onSubmit={this.OnSubmitData}>
                            <Form.Field>
                                <label>First Name</label>
                            </Form.Field>
                            <Form.Input name="firstname" placeholder='First Name'/>
                            <Form.Field>
                                <label>Last Name</label>
                                <Form.Input name="lastname" placeholder='Last Name'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <Form.Input placeholder='email' name="email1" value={this.state.email} disabled/>

                        <Divider/>
                      </Form.Field>
                      <Button onClick={this.show('small')} color='blue' type='submit'>Save</Button>
                      <a href="#/chat">
                          <Button color='red'>cancel</Button>
                      </a>
                  </Form>
                        <Modal size={size} open={open}>
                            <Modal.Header id="updateheader">
                                <h2>
                                    <Image src='../../images/thumb.gif' size="small" avatar/>Updated Suceessfully</h2>
                            </Modal.Header>
                            <Modal.Actions>
                                <Button color='gray' onClick={this.profile.bind(this)}>
                                    <Button.Content visible><Icon name='thumbs up'/>Ok</Button.Content>
                                </Button>
                            </Modal.Actions>
                        </Modal>


                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}
