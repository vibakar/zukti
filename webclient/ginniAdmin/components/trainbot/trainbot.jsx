import React from 'react';
import {
    Grid,
    Button,
    Form,
    Dropdown,
    Input,
    Icon,
    Card,
    Label
} from 'semantic-ui-react';
export default class TrainBot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    text: 'What',
                    value: 'what'
                }, {
                    text: 'How',
                    value: 'how'
                }, {
                    text: 'Why',
                    value: 'why'
                }, {
                    text: 'When',
                    value: 'when'
                }
            ]
        }
    }
    handleAddition = (e, {value}) => {
        this.setState({
            options: [
                {
                    text: what,
                    value: what
                },
                ...this.state.options
            ]
        })
    }
    handleChange = (e, {value}) => this.setState({currentValue: value})
    render() {
        const {currentValue} = this.state;
        return (
            <div style={{
                backgroundImage: "url('../../images/trainbot.jpg')",
                height: '100%'
            }}>
                <Grid >
                    <Grid.Row></Grid.Row>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={8}>
                         <h2>Add Intent</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={6}>
                            <Form>
                                <Form.Field >
                                    <label><h3>Select Intent</h3></label>
                                    <Input >
                                        <Dropdown fluid options={this.state.options} placeholder='Intent' search selection allowAdditions value={currentValue} onAddItem={this.handleAddition} onChange={this.handleChange}/>
                                    </Input>
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                                        <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={6}>
                            <Form>
                                <Form.Field>
                                    <label><h3>Same As</h3></label>
                                    <Input placeholder='sameas'/>
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={5}></Grid.Column>
                        <Grid.Column width={3}>
                            <Button color="blue" fluid>
                                <Icon name='plus circle'>Add
                                </Icon>
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={6}>
                            <Card fluid color="teal">
                                <Card.Content>
                                    <Card.Header>
                                        <label>We Have SameAs</label>
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                  <Label color='gray'>
                                        what
                                        <Icon name='delete'/>
                                    </Label>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    };
}
