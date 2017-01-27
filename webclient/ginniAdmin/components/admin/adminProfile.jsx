import React from 'react';
import {
    Grid,
    List,
    Image,
    Header,
    Icon,
    Button,
    Modal,
    Form
} from 'semantic-ui-react';

export default class AdminProfilePage extends React.Component {
    render() {
        return (
            <div>
                <Grid divided="vertically">
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={14}>
                        <br/><br/>
                        <Grid divided='vertically'>
                            <Grid.Row columns={4}>
                                <Grid.Column>
                                    <Header><h2>Admin Details</h2></Header>
                                    <Image src='http://semantic-ui.com/images/avatar2/small/rachel.png' size='small'/>
                                    <br/>
                                    <Modal trigger={< Button > Edit Profile < /Button>} closeIcon='close'>
                                        <Modal.Header>Edit Profile</Modal.Header>
                                        <Modal.Content image>
                                            <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png'/>
                                            <Modal.Description>
                                                <Form>
                                                    <Form.Field>
                                                        <label> Name</label>
                                                        <input placeholder=' Name'/>
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Password</label>
                                                        <input placeholder='Password' type='password'/>
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Confirm Password</label>
                                                        <input placeholder='Confirm Password' type='password'/>
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>E-Mail</label>
                                                        <input placeholder='E-Mail' />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Phone Number</label>
                                                        <input placeholder='Phone Number'/>
                                                    </Form.Field>
                                                    <Button type='submit' positive>Save</Button>
                                                    <Button type='submit' negative>Cancel</Button>
                                                </Form>

                                            </Modal.Description>
                                        </Modal.Content>
                                    </Modal>
                                </Grid.Column>
                                <Grid.Column>

                                    <List>

                                        <Header><h2>General Information</h2></Header>
                                        <List.Item>
                                            <h4>Name:
                                            Patrick</h4>
                                        </List.Item>
                                        <List.Item>
                                            <h4>Date Of Birth:
                                            31 December</h4>
                                        </List.Item>
                                        <List.Item>
                                            <h4>Location:
                                            India</h4>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <List>

                                        <List.Item>
                                            <Header><h2>Contact Information</h2></Header>
                                            <h4>
                                                <Icon name="envelope"></Icon>E-Mail:admin@gmail.com
                                            </h4>
                                        </List.Item>
                                        <List.Item>
                                            <h4>
                                                <Icon name="call"></Icon>Phone:9988776655
                                            </h4>
                                        </List.Item>

                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <List>

                                        <Header><h2>
                                            <Icon name="bar chart"></Icon>Statistics</h2></Header>
                                        <List.Item><h4>
                                            Number of Queries Added:487
                                          </h4>
                                        </List.Item>
                                        <List.Item><h4>Number of Bots Trained:5</h4>
                                        </List.Item>
                                        </List>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
