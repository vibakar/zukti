import React from 'react';
import {
    Divider,
    Grid
  } from 'semantic-ui-react';
import QuestionAnswer from './questionsAnswer';
import AddQuestionAnswerSet from './addQuestionsAnswerSet';

export default class QuestionSetDisplay extends React.Component {

    constructor() {
        super();
        this.addQuestionAnswerSet = this.addQuestionAnswerSet.bind(this);
        this.state = {
           questionAnswerSet: []
        };
    }
    // function to add a Question answer set to display
    addQuestionAnswerSet(id) {
        this.state.questionAnswerSet.push(<QuestionAnswer answerID={id}/>);
        this.setState({questionAnswerSet: this.state.questionAnswerSet});
    }
    render() {
        return (
            <div style={{
                backgroundImage: "url('../../images/wall.jpg')"
            }}>
                <Grid style={{
                    width: '95%',
                    margin: 'auto'
                }}>
                    <Grid.Row columns={1}>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <div style={{
                            width: '100%'
                        }}>
                            <p>It is a set of questions and the corresponding bot replies. Ginni will understand user questions similar to those you’ve set up and reply with a appropiate answer.</p>
                            <Divider fitted/>
                        </div>
                    </Grid.Row>
                    <Grid.Row>
                        <AddQuestionAnswerSet handlerAddQASet={this.addQuestionAnswerSet}/>
                    </Grid.Row>
                    <Grid.Row>
                      {this.state.questionAnswerSet}
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
