import React from 'react';
import {
    Card,
    Button,
    TextArea,
    Grid,
    Segment,
    Label,
    Icon,
    Input,
    Radio,
    Image
} from 'semantic-ui-react';
import InputQuestion from './inputQuestion';
import ReplyContentInput from './replyContentInput';

//will recieve two props questionAnswerSetID
//will also send questionAnswerSetID to replyContentType
export default class QuestionsAnswer extends React.Component {

    constructor(props) {
        super(props);
        // to remove an added question
        this.removeQuestion = this.removeQuestion.bind(this);
        // handler  function to add question to a question set and then set state
        this.addQuestionToDisplay = this.addQuestionToDisplay.bind(this);
        this.state = {
            questions: [],
            value: 'text'
        }
    }
    // to remove an question from an AI rule
    removeQuestion(index) {
      //  handlerRemoveQuestionAnswerSet will be  called with question
        this.state.questions.splice(index, 1);
        this.setState({questions: this.state.questions});
    }
    // handler function to add question to a question set in user display and then set state
    addQuestionToDisplay(question){
      this.state.questions.push(question)
      this.setState({questions:this.state.questions});
    }


    //to handle Text or block Radio Button
    handleChange = (e, {value}) => this.setState({value})
    render() {
        const styleFirstCardBoxInRow = {
            'margin-right': '0px'
        }
        let questions = this.state.questions.map((question, index) => {
            return (
                <Label color='teal' style={{
                    'margin-top': '5px'
                }} image>
                    {question}
                    <Icon onClick={() => this.removeQuestion(index)} name='delete'/>
                </Label>
            );
        });
        return (
            <Card.Group key={this.props.index} itemsPerRow={1} style={{
                'width': '100%'
            }}>
                <Card  fluid style={styleFirstCardBoxInRow}>
                    <Label onClick={() => this.props.removeRuleBlockHandler(this.props.index)} corner='right' icon='delete'></Label>
                    <Card.Content>
                        <Card.Meta>
                            If the user asks something similar to
                        </Card.Meta>
                        <Card.Description>
                            <InputQuestion categoryID={this.props.categoryID} questionsAnswerSetID={this.props.questionsAnswerSetID} handlerAddQuestionToDisplay={this.addQuestionToDisplay}/>
                            <div>
                                {questions}
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
                            <ReplyContentInput questionsAnswerSetID={this.props.questionsAnswerSetID} replyContentType={this.state.value}/>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        );
    }
}
