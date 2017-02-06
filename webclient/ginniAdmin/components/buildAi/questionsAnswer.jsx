import React from 'react';
import {Card, Label, Radio} from 'semantic-ui-react';
import InputQuestion from './inputQuestion';
import ReplyContentInput from './replyContentInput';

export default class QuestionsAnswer extends React.Component {

    constructor(props) {
        super(props);
        this.addQuestionToDisplay = this.addQuestionToDisplay.bind(this);
        this.addAnswerToDisplay = this.addAnswerToDisplay.bind(this);
        this.state = {
            question: '',
            value: 'text',
            answer:''
        }
    }
    handleChange = (e, {value}) => this.setState({value});

    addQuestionToDisplay(question) {
        this.setState({question: question});
    }
    addAnswerToDisplay(answer){
      this.setState({answer:answer});
    }
    render() {

        const styleFirstCardBoxInRow = {
            'margin-right': '0px'
        }
        return (
            <Card.Group key={this.props.index} itemsPerRow={1} style={{
                'width': '100%'
            }}>
                <Card fluid style={styleFirstCardBoxInRow}>
                    <Label onClick={() => this.props.removeRuleBlockHandler(this.props.index)} corner='right' icon='delete'></Label>
                    <Card.Content>
                        <Card.Meta>
                            If the user asks something similar to
                        </Card.Meta>
                        <Card.Description>
                            <InputQuestion  handlerAddQuestionToDisplay={this.addQuestionToDisplay} answerID={this.props.answerID}/>
                            <div>
                                <Label color='teal' style={{
                                    'margin-top': '5px'
                                }} image>
                                    {this.state.question}
                                </Label>
                            </div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <Card.Meta>
                            Bot reply
                            <Radio style={{
                                'margin-left': '5px'
                            }} label='Text' name='radioGroup' value='text' checked={this.state.value === 'text'} onChange={this.handleChange}/>
                            <Radio label='Video' name='radioGroup' value='video' checked={this.state.value === 'video'} onChange={this.handleChange}/>
                            <Radio label='Blog' name='radioGroup' value='blog' checked={this.state.value === 'blog'} onChange={this.handleChange}/>
                            <Radio label='Code Snippet' name='radioGroup' value='codeSnippet' checked={this.state.value === 'codeSnippet'} onChange={this.handleChange}/>
                        </Card.Meta>
                        <Card.Description>
                            <ReplyContentInput answerID={this.props.answerID} replyContentType={this.state.value} showanswer={this.addAnswerToDisplay}/>
                            <div>
                                <Label color='teal' style={{
                                    'margin-top': '5px'
                                }} image>
                                    {this.state.answer}
                                </Label>
                            </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        );
    }
}
