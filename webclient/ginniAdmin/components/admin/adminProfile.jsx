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
import Axios from 'axios';
import validator from 'validator';
import './adminProfile.css';
//import $ from 'jquery';
const request = require('superagent');

export default class ClientProfile extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            allFiles: [],
            email: '',
            firstname: '',
            lastname:'',
            photo:''
        };
        this.OnSubmitData = this.OnSubmitData.bind(this);
        this.show = this.show.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.saveImage=this.saveImage.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
    };
onDrop(files)
      {
          files.forEach((file)=> {
                      this.state.allFiles.push(file);
              });

       this.setState({ allFiles: this.state.allFiles});
       console.log(this.state.allFiles[0])
        console.log(this.state.allFiles[0].name);
    }

     uploadImage()
      {
        console.log("Image"+this.state.allFiles[0].name);
        let photo = new FormData();
          this.state.allFiles.forEach((file)=> {
              photo.append('IMG',file);
              //console.log(file.name);
          });
          let self=this;
        request.post('/upload').send(photo).end(function(err, resp) {
        console.log('save')
            if (err)
                  {
                  console.error(err);
                  }
                  else
                  {
                    console.log(resp.text);
                    console.log(self.state.allFiles[0].name);
                      self.saveImage(resp.text);
                      //this.setState({ allFiles:[]});
                return resp;
                  }
          });

      }
      saveImage(image){
        Axios({
              method: 'POST',
              url:"http://localhost:8080/uploadImage",
              data: {data :image}
          }).then(function(response) {
            hashHistory.push('/react');
            }).catch(function(err) {
                console.log("error",err);
            });
      }
    profile()
    {
        hashHistory.push('/react')
    }
    componentDidMount() {
      let self=this;
        Axios({
            url: ' http://localhost:8080/clientinformation',
            method: 'get'
        }).then(function(response) {
          console.log(response.data[0].local);
            console.log("email"+response.data[0].local.email);
            self.setState({email:response.data[0].local.email});
        }).catch(function(err) {
            // alert("bjhbj"+err);
        });
    }
    OnSubmitData(e, value) {
        const self = this;
        e.preventDefault();
        Axios({
            url: ' http://localhost:8080/updateprofile',
            method: 'put',
            data: {
                email: this.state.email,
                firstname: value.formData.firstName,
                lastname: value.formData.lastName
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
    // validation for firstname
    ChangeFirst = (event) => {
        this.setState({firstname: event.target.value});
        if (validator.isAlpha(event.target.value)) {
            this.setState({errorfirst: false});
            this.setState({errormessagefirst: false});
        } else {
            this.setState({errorfirst: true});
            this.setState({errormessagefirst: 'Enter a valid name'});
        }
    }
    // validation for lastname
    ChangeLast = (event) => {
        this.setState({lastname: event.target.value});
        if (validator.isAlpha(event.target.value)) {
            this.setState({errorlast: false});
            this.setState({errormessagelast: false});
        } else {
            this.setState({errorlast: true});
            this.setState({errormessagelast: 'Enter a valid name'});
        }
    }
    render() {
        const {open, size} = this.state;
        return (
            <Modal size='small' open={true} onClose={this.close} closeOnRootNodeClick={false} closeIcon='close'>
                <Modal.Header id="updateheader"><Icon name='user'/>Edit Profile</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium'>
                        <Dropzone ref='dropzone' multiple={false} accept={'image/*'} onDrop={this.onDrop}>
                            <div>
                                <div>{this.state.allFiles.map((file) => <img src={file.preview} style={{
                                        height: 204,
                                        width: 204
                                    }}/>)}</div>
                            </div>
                        </Dropzone><br/>
                        <Button primary onClick={this.uploadImage}>
                            Change Photo
                        </Button>
                    </Image>
                    <Modal.Description id="clientmodal">
                        <Form onSubmit={this.OnSubmitData}>
                            <Form.Field>
                                <label>First Name</label>
                            </Form.Field>
                            <Form.Input name="firstName" onChange={this.ChangeFirst} placeholder='First Name'/>
                            <Form.Field>
                                <label>Last Name</label>
                                <Form.Input name="lastName" onChange={this.ChangeLast.bind(this)} placeholder='Last Name'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <Form.Input placeholder='email' name="email" value={this.state.email} disabled/>

                        <Divider/>
                      </Form.Field>
                      <Button onClick={this.show('small')} disabled={(!this.state.firstname) || (!this.state.lastname)} color='blue' type='submit'>Save</Button>
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
