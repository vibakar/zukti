import React from 'react';
import {Card, Label, Radio, Button} from 'semantic-ui-react';
import Axios from 'axios';
import InputQuestion from './inputQuestion';
import ReplyContentInput from './replyContentInput';

export default class QuestionsAnswer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'blog',
            question: '',
            texts: [' '],
            videos: [' '],
            blogs: [' ']
        }
        this.saveQuestionToState = this.saveQuestionToState.bind(this);
        this.saveAnswerToState = this.saveAnswerToState.bind(this);
        this.saveQuestionAnswer = this.saveQuestionAnswer.bind(this);
    }

    handleChange = (e, {value}) => this.setState({value});

    // function to save question into State
    saveQuestionToState(question) {
        console.log(question);
        this.state.question = question;
    }
    saveAnswerToState(type, answer, i) {
        if (type == 'text') {
            console.log('in text');
            this.state.texts[i] = answer;
            this.setState({texts: this.state.texts})
        } else if (type == 'video') {
            this.state.videos[i] = answer;
            this.setState({videos: this.state.videos})
        } else if (type == 'blog') {
            this.state.blogs[i] = answer;
            this.setState({blogs: this.state.blogs})
        }
    }
    // fired when submit button is clicked in this function the question answer will be saved to neo4j
    saveQuestionAnswer(){
      console.log(this.state);
        // perform validation first and then save it to graph DB
        Axios.post('/qa/addQuestionAnswer',{...this.state}).
        then((response)=>{
          console.log(response);
        }).
        catch((error)=>{
          console.log(error);
        })
    }
    render() {

        const styleFirstCardBoxInRow = {
            'margin-right': '0px'
        }
        return (
            <Card.Group itemsPerRow={1} style={{
                'width': '100%'
            }}>
                <Card fluid style={styleFirstCardBoxInRow}>
                    <Card.Content>
                        <Card.Meta>
                            If the user asks something similar to
                        </Card.Meta>
                        <Card.Description>
                            <InputQuestion handlerForsaveQuestionInParentState={this.saveQuestionToState}/>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <Card.Meta>
                            Bot reply
                            <Radio label='Blog' name='radioGroup' value='blog' checked={this.state.value === 'blog'} onChange={this.handleChange}/>
                            <Radio style={{
                                'margin-left': '5px'
                            }} label='Text' name='radioGroup' value='text' checked={this.state.value === 'text'} onChange={this.handleChange}/>
                            <Radio label='Video' name='radioGroup' value='video' checked={this.state.value === 'video'} onChange={this.handleChange}/>
                        </Card.Meta>
                        <Card.Description>
                            <ReplyContentInput texts={this.state.texts} videos={this.state.videos} blogs={this.state.blogs} handlerForSaveAnswerToParentState ={this.saveAnswerToState} replyContentType={this.state.value}/>
                            <Button color='teal' onClick={this.saveQuestionAnswer}>SAVE</Button>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        );
    }
}
