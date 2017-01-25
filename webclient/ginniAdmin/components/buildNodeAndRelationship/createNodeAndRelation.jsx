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
        relationval: '',
        node1prop: 'cool',
        node2prop: '',
        relationprop: ''
    }
    handlenode1Change = (e, {value}) => this.setState({node1val: value})
    handlerelationChange = (e, {value}) => this.setState({relationval: value})
    handlenode2Change = (e, {value}) => this.setState({node2val: value})
    handlenode1propChange = (e, data) => this.setState({node1prop: data.checked});
    handlerelationpropChange = (e, data) => this.setState({relationprop: data.checked})
    handlenode2propChange = (e, data) => this.setState({node2prop: data.checked})


    createNodeAndRelation() {
        let node1 = ReactDOM.findDOMNode(this.refs.node1).value;
        let relation = ReactDOM.findDOMNode(this.refs.relation).value;
        let node2 = ReactDOM.findDOMNode(this.refs.node2).value;
        let propertykeynode1 = ReactDOM.findDOMNode(this.refs.propertykeynode1).value;
        let propertyvaluenode1 = ReactDOM.findDOMNode(this.refs.propertyvaluenode1).value;
        let propertykeynode2 = ReactDOM.findDOMNode(this.refs.propertykeynode2).value;
        let propertyvaluenode2 = ReactDOM.findDOMNode(this.refs.propertyvaluenode2).value;
        let propertykeyrelation = ReactDOM.findDOMNode(this.refs.propertykeyrelation).value;
        let propertyvaluerelation = ReactDOM.findDOMNode(this.refs.propertyvaluerelation).value;
        var node1detail = this.state.node1val;
        var node1propdetail = this.state.node1prop;
        var relationdetail = this.state.relationval;
        var relationpropdetail = this.state.relationprop;
        var node2detail = this.state.node2val;
        var node2propdetail = this.state.node2prop;
        //console.log(node1 + " is node1 " + node2 + " is node2 " + relation + " is relation " + propertynode1 + " propertynode1" + propertynode2 + " is propertynode2" + propertyrelation + " is propertynode1");

        Axios.post('/cn/a', {
            node1: node1,
            relation: relation,
            node2: node2,
            propertykeynode1: propertykeynode1,
            propertyvaluenode1: propertyvaluenode1,
            propertykeynode2: propertykeynode2,
            propertyvaluenode2: propertyvaluenode2,
            propertykeyrelation: propertykeyrelation,
            propertyvaluerelation: propertyvaluerelation,
            node1detail: node1detail,
            node1propdetail: node1propdetail,
            relationdetail: relationdetail,
            relationpropdetail: relationpropdetail,
            node2detail: node2detail,
            node2propdetail: node2propdetail
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
                                    <Card color='green' fluid>
                                        <Card.Content><Card.Header>
                                            <Radio label='New' name='radionode1' value='newnode1' defaultChecked checked={this.state.node1val === 'newnode1'} onChange={this.handlenode1Change}/>
                                            <Radio label='Existing' name='radionode1' value='existingnode1' checked={this.state.node1val === 'existingnode1'} onChange={this.handlenode1Change}/>
                                            <Checkbox label='Properties'  onChange={this.handlenode1propChange}/>
                                        </Card.Header></Card.Content>
                                        <Card.Content><Card.Description>
                                            <input placeholder='Node Name' ref='node1'/>
                                        </Card.Description></Card.Content>
                                        <Card.Content extra>
                                            <Form><Form.Group widths='equal'><input placeholder='key' ref='propertykeynode1'/>
                                                <input placeholder='value' ref='propertyvaluenode1'/><Button circular icon='plus' color='green'/><Button circular icon='delete' color='red'/></Form.Group></Form>
                                        </Card.Content>

                                    </Card>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Card color='red' fluid>
                                        <Card.Content><Card.Header>
                                            <Radio label='New' name='radiorelation' value='newrelation' checked={this.state.relationval === 'newrelation'} onChange={this.handlerelationChange}/>
                                            <Radio label='Existing' name='radiorelation' value='existingrelation' checked={this.state.relationval === 'existingrelation'} onChange={this.handlerelationChange}/>
                                            <Checkbox label='properties' onChange={this.handlerelationpropChange}/>
</Card.Header></Card.Content>
<Card.Content><Card.Description>
                                            <input placeholder='Relation name' ref='relation'/>
                                            </Card.Description></Card.Content>
                                            <Card.Content extra><Form><Form.Group widths='equal'>
                                            <input placeholder='key' ref='propertykeyrelation'/>
                                            <input placeholder='value' ref='propertyvaluerelation'/><Button circular icon='plus' color='green'/><Button circular icon='delete' color='red'/></Form.Group></Form>

</Card.Content>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Card color='green' fluid>
                                    <Card.Content><Card.Header>

                                            <Radio label='New' name='radionode2' value='newnode2' checked={this.state.node2val === 'newnode2'} onChange={this.handlenode2Change}/>
                                            <Radio label='Existing' name='radionode2' value='existingnode2' checked={this.state.node2val === 'existingnode2'} onChange={this.handlenode2Change}/>
                                            <Checkbox label='properties' onChange={this.handlenode2propChange}/>
                                            </Card.Header></Card.Content>
                                            <Card.Content><Card.Description>
                                            <input placeholder='Node2 name' ref='node2'/>
                                            </Card.Description></Card.Content>
                                            <Card.Content ><Form><Form.Group widths='4'>
                                            <input placeholder='key' ref='propertykeynode2'/>
                                            <input placeholder='value' ref='propertyvaluenode2'/><Button circular icon='plus' color='green'/><Button circular icon='delete' color='red'/></Form.Group></Form>
                                        </Card.Content>

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
