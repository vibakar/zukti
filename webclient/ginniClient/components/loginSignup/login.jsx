import React from 'react';
import {Link} from 'react-router';
import {
    Button,
    Card,
    Divider,
    Form,
    Grid,
    Icon,
    Container,
    Header,
  }from 'semantic-ui-react';

export default class Login extends React.Component {
    render() {
        return (
          <Container width={8}>
            <Header as='h1' textAlign='center'>
              Welcome To Zukti
            </Header>
            <Divider/>
            <Grid columns='two' centered stackable>
                <Grid.Row>
                  <Grid.Column centered='true'>
                          <Button color='facebook' floated='right'>
                            <Icon name='facebook'/>Sign in with Facebook
                        </Button>
                    </Grid.Column>
                    <Grid.Column centered>
                        <Button color='google plus' floated='left'>
                            <Icon name='google plus'/>Sign in with Google Plus
                        </Button>
                    </Grid.Column>
                    </Grid.Row>
                  </Grid>
                         <Card.Group itemsPerRow={2}>
                        <Card raised >
                            <Card.Content>
                                <Card.Header>
                                    NEW MEMBER-SIGN UP
                                </Card.Header>
                            </Card.Content>
                            <Card.Content extra>
                                <Form>
                                    <Form.Field>
                                        <input type='text' placeholder='First name' fluid/>
                                    </Form.Field>
                                    <Divider/>
                                    <Form.Field>
                                        <input type='text' placeholder='Last Name' fluid/>
                                    </Form.Field>
                                    <Divider/>
                                    <Form.Field >
                                        <input type='text' placeholder='Username' fluid/>
                                    </Form.Field>
                                    <Divider/>
                                    <Form.Field>
                                        <input type='password' placeholder='Password' fluid/>
                                    </Form.Field>
                                    <Button fluid color='blue' active='true'>SIGN UP</Button>
                                </Form>
                            </Card.Content>
                        </Card>
                        <Card raised>
                            <Card.Content>
                                <Card.Header>
                                    EXISTING MEMBER-SIGN IN
                                </Card.Header>
                                <Form>
                                    <Form.Field>
                                        <input type='text' placeholder='Email address' fluid/>
                                    </Form.Field>
                                    <Divider/>
                                    <Form.Field>
                                        <input type='text' placeholder='Password' fluid/>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Group inline>
                                            <Form.Checkbox label='Remember me' value='saveUser'/>
                                        </Form.Group>
                                        <Form.Group inline>
                                            <a href='#'>forgot password?</a>
                                        </Form.Group>
                                    </Form.Field>
                                    <Link to='/userhome'>
                                    <Button fluid color='green' active='true'>SIGN IN</Button>
                                    </Link>
                                </Form>
                            </Card.Content>
                        </Card>
                      </Card.Group>
                      </Container>
        );
    }
}
