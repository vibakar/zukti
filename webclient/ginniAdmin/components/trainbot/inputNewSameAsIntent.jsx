import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import {Form} from 'semantic-ui-react';
import Config from '../../../../config/url';

export default class InputNewsSameAsIntent extends React.Component {
    constructor(props) {
        super(props);
        this.addNewSameAsIntent = this.addNewSameAsIntent.bind(this);
    }
    addNewSameAsIntent(e) {
        e.preventDefault();
        //getting the value of new same as intent from text field
        let newSameAsIntent = ReactDOM.findDOMNode(this.refs.newSameAsIntent).value;
        //clearing the input newSameAsIntent text field
        ReactDOM.findDOMNode(this.refs.newSameAsIntent).value = '';
        // ajax call to save new sameas intent to the base Intent
        let url = Config.url + '/intent/addNewSameAsIntent'
        Axios.post(url, {
            baseIntent: this.props.baseIntent,
            newSameAsIntent: newSameAsIntent
        }).then((response) => {
            console.log(response.data);
            this.props.handlerAddNewIntent(newSameAsIntent);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <Form onSubmit={this.addNewSameAsIntent}>
                <Form.Field>
                    <label>
                        <h3>Same As</h3>
                    </label>
                    <input autoComplete='off' type='text' name='newSameAsIntent' ref='newSameAsIntent' placeholder='Type new same as intent value'/>
                </Form.Field>
            </Form>
        );
    }
}
