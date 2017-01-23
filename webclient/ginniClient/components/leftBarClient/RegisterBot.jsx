import React from 'react';
import { Button, Card, Divider, Form, Grid, Container, Segment, Dropdown } from 'semantic-ui-react';
export default class RegisterBot extends React.Component {
   render() {
     const options = [
{ text: 'Angular', value: 'angular' },
{ text: 'CSS', value: 'css' },
{ text: 'HTML', value: 'html' },
{ text: 'Javascript', value: 'javascript' },
{ text: 'NodeJS', value: 'node' },
{ text: 'Python', value: 'python' },
{ text: 'React', value: 'react' },
{ text: 'Ruby', value: 'ruby' },
{ text: 'UI Design', value: 'ui' },
{ text: 'User Experience', value: 'ux' }
];
       return (
         <div>
            <br/>
         <br/>
         <Container>
           <Grid divided='vertically'>
             <Grid.Row columns={3}>
               <Grid.Column >
               </Grid.Column>
                   <Grid.Column  floated='center'>
                       <Card centered="true">
                           <Card.Content>
                               <Card.Header>
                                   NEW BOT REQUEST
                               </Card.Header>
                           </Card.Content>
                           <Card.Content extra>
                               <Form>
                                   <Form.Field>
                                       <Dropdown placeholder='Skills' fluid multiple selection options={options} />
                                   </Form.Field>
                                   <Divider/>
                                   <Form.Field>
                                       <input type='text' placeholder='DOMAIN' fluid/>
                                   </Form.Field>
                                   <Divider/>
                                   <Form.Field >
                                       <input type='text' placeholder='TECHNOLOGY' fluid/>
                                   </Form.Field>
                                   <Divider/>
                                   <Form.Field>
                                       <input type='text' placeholder='SPECIFICATION' fluid/>
                                   </Form.Field>

                               </Form>
                               <Segment vertical>
                               <Button fluid color='blue' active='true'>Request</Button>
                               </Segment>
                           </Card.Content>
                       </Card>
                   </Grid.Column>

                   <Grid.Column>

                   </Grid.Column>
                 </Grid.Row>
               </Grid>

         </Container>
       </div>
       );
   }
}
