import React from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import {
    Input,
    Form,
    TextArea,
    Divider,
    Radio,
    Card,
    Grid,
    Checkbox
} from 'semantic-ui-react'

import {Button, Icon} from 'semantic-ui-react';
import Config from '../../../../config/url';

export default class CreateNodeAndRelation extends React.Component {
    constructor(props) {
        super(props);

        this.createNodeAndRelation = this.createNodeAndRelation.bind(this);

    }
    state = {
        node1val: '',
        node2val: '',
        relationval: ''
    }



    createNodeAndRelation() {
        let node1 = ReactDOM.findDOMNode(this.refs.node1).value;
        let relation = ReactDOM.findDOMNode(this.refs.relation).value;
        let node2 = ReactDOM.findDOMNode(this.refs.node2).value;

        //console.log(node1 + " is node1 " + node2 + " is node2 " + relation + " is relation " + propertynode1 + " propertynode1" + propertynode2 + " is propertynode2" + propertyrelation + " is propertynode1");

        Axios.post('/cn/a', {
            node1: node1,
            relation: relation,
            node2: node2
                    }).then((response) => {}).catch((error) => {
            alert(error)
        });
    }

    render() {

        return (
            <div>
                <h2>Add Node's and Relations to neo4j</h2>
                <p>This is an front end UI for saving new nodes and relation's to neo4j
                    <br/>node1:{this.state.node1val}
                    prop:{this.state.node1prop}
                    <br/>
                    relation:{this.state.relationval}
                    prop:{this.state.relationprop}
                    <br/>
                    node2:{this.state.node2val}
                    prop:{this.state.node2prop}
                </p>
                <Form>
                    <Card.Group>
                        <Grid  padded>
                            <Grid.Row centered columns={3}>
                                <Grid.Column width={5} >
                                    <Card color='green' fluid ref='cardnode1'>

                                        <Card.Content><Card.Description>
                                            <input placeholder='Node Name' ref='node1'/>
                                        </Card.Description></Card.Content>


                                    </Card>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Card color='red' fluid>

<Card.Content><Card.Description>
                                            <select ref='relation'>
                                                <option value='same_as'>same_as</option>
                                                <option value='subconcept'>subconcept</option>
                                            </select>
                                            </Card.Description></Card.Content>

                                    </Card>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Card color='green' fluid>

                                            <Card.Content><Card.Description>
                                            <input placeholder='Node2 name' ref='node2'/>
                                            </Card.Description></Card.Content>

                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Card.Group>

                </Form>
                <Button fluid onClick={this.createNodeAndRelation} color='green'><Icon name='plus'/>Add Node and Relation</Button>
            </div>
        );
    }
}
