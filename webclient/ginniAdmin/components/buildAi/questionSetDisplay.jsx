import React from 'react';
import {
    Divider,
    Grid,
    Dropdown,
    Input,
    Icon,
    Radio,
    Button
  } from 'semantic-ui-react';
import QuestionAnswer from './questionsAnswer';
import AddQuestionAnswerSet from './addQuestionsAnswerSet';
const intentoptions = [
  { key: 'What', text: 'What', value: 'What' },
  { key: 'Implement', text: 'Implement', value: 'Implement' },
  { key: 'Difference', text: 'Difference', value: 'Difference' },
  { key: 'Advantage', text: 'Advantage', value: 'Advantage' },
  { key: 'Disadvantage', text: 'Disadvantage', value: 'Disadvantage' },
]
const conceptoptions = [
  { key: 'React', text: 'React', value: 'React' },
  { key: 'Router', text: 'Router', value: 'Router' },
  { key: 'Lifecycle', text: 'Lifecycle', value: 'Lifecycle' },
  { key: 'Components', text: 'Components', value: 'Components' },
  { key: 'Events', text: 'Events', value: 'Events' },
]
export default class QuestionSetDisplay extends React.Component {
  state = {}
 handleChange = (e, { value }) => this.setState({ value })
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
      const { value } = this.state
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
                      <Grid.Column width={4}>
                      Select Intent
                      <Dropdown placeholder='Select intent' fluid  selection options={intentoptions} />
                    </Grid.Column>
                    <Grid.Column width={4}/>
                      <Grid.Column width={4}>
                      Select Concept
                      <Dropdown placeholder='Select concept' fluid selection options={conceptoptions} />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={16}>
                      <Input fluid icon='question circle' iconPosition='left' placeholder='Enter Query...' fluid/>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={16}>
                       <Input  fluid icon='edit' iconPosition='left' placeholder='Enter Answer...' />
                     </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={2}>
                        <Radio label='Text' name='plan' value='a' checked={value === 'a'} onChange={this.handleChange} />
                   </Grid.Column>
                    <Grid.Column width={2}>
                      <Radio label='Video' name='plan' value='b' checked={value === 'b'} onChange={this.handleChange} />
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Radio label='Blogs' name='plan' value='c' checked={value === 'c'} onChange={this.handleChange} />
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Radio label='Code Snippet' name='plan' value='d' checked={value === 'd'} onChange={this.handleChange} />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                      <Button color='teal'>ADD QUERY</Button>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
