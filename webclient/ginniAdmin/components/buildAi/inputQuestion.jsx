import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import {Input, Form} from 'semantic-ui-react';
import Config from '../../../../config/url';

export default class InputQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.addQuestion = this.addQuestion.bind(this);
    }

    // to add a new question to ai rule and then store it
    addQuestion(e) {
        e.preventDefault();
        //getting the value of question from text field
        let question = ReactDOM.findDOMNode(this.refs.question).value;
        //clearing the input question text field
        ReactDOM.findDOMNode(this.refs.question).value = '';
        // ajax call to save question in a specifc question set
        let url = Config.url + '/qa/addQuestion';
        console.log(this.props.categoryID);
        Axios.post(url, {
            question: question,
            answerID: this.props.answerID
        }).then((response) => {
            let questionID=response.data.id;
            this.props.handlerAddQuestionToDisplay(questionID,question);
        }).catch((error) => {
            alert('Error in AJAX call while saving question to the respective question set');
            console.log(error);
        });
    }

    render() {
        return (
            <Form onSubmit={this.addQuestion}>
                <Form.Field>
                    <input autoComplete="off" type='text' name='question' ref='question' style={{
                        width: '100%',
                        'margin-bottom': '8px'
                    }} placeholder='Press enter to add more pharases'/>
                </Form.Field>
            </Form>
        );
    }
}
