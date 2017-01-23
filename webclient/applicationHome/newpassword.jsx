import React from 'react';
import {Button,Form,Label,Input,Divider} from 'semantic-ui-react';
import './newpassword.css';

export default class NewPassword extends React.Component {
    constructor(){

        super();
    }


    render(){
        return(
            <div id='newpassword'>

            <Form.Field >
            <h3 id='heading'>Reset your new password</h3><Divider id='divider'/><br/>

            <Label pointing='right' id='labelpassword'>new password</Label>
            <Input type='password' placeholder='password' id='fields'/><br/><br/><br/>
            <Label pointing='right'id='labelpassword'>confirm password</Label>
            <Input type='password' placeholder='password' id='fields'/><br/><br/><br/>
            <Button size='small' id='submit'>submit</Button>
            </Form.Field>

            </div>
            )
    }
}
