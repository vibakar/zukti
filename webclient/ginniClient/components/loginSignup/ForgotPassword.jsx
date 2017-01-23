import React from 'react';
import { Button, Card, Form, Grid, Input } from 'semantic-ui-react';

export default class ForgotPassword extends React.Component {
   render() {
       return (
       <div>
       <br/><br/><br/><br/>
       <Grid divided='vertically'>
       <Card centered='true'>
         <Card.Content>
           <Card.Header>
            RESET PASSWORD
           </Card.Header>
           </Card.Content>
           <Card.Content>
           <Card.Meta>
             <Form success>
               <center><Input size='large' placeholder='email address' /></center>
             </Form>
           </Card.Meta>
         </Card.Content>
         <Card.Content extra>
           <center><Button color='blue' active='true' centered='true'>SEND</Button></center>
         </Card.Content>
       </Card>
 </Grid>
</div>
);
}
}
