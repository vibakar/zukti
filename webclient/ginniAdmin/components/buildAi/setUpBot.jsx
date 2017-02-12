import React from 'react';
import {
    Divider,
    Grid
  } from 'semantic-ui-react';

import AddQuestionAnswerSet from './addQuestionAnswerSet';
import DisplayQAset from '../getquestionanswerset/displayqaset';
import Display from '../getquestionanswerset/displayaccordion';
import BuildAI from './BuildAI';
import Pagination from '../getquestionanswerset/pagination';


export default class QuestionSetDisplay extends React.Component {

    constructor() {
        super();
        this.state = {
          type:'',
          data:[],
          displayQuestionAnswer :[]
            }
            this.addQuestionAnswerSet = this.addQuestionAnswerSet.bind(this);
            this.displayQuestionAnswerSet = this.displayQuestionAnswerSet.bind(this);
        }

  //  function to add a Question answer set to display
    addQuestionAnswerSet() {
        this.setState({type:'add'});
      }

      displayQuestionAnswerSet(data){
        this.setState({type:'display'});
        console.log(data);
        // data.map((data)=>{
        //   this.state.displayQuestionAnswer.push(<Pagination data={data}/>)
        // });
        this.setState({displayQuestionAnswer:<Pagination data={data}/>});
      //  this.state.displayQuestionAnswer =[];
      }

    render() {
      // const show = this.state.type;
      // let display= null;
      // if(show === 'add'){
      //   display = <BuildAI />
      // }
      // else if (show === 'display') {
      //   display = <Display data ={this.state.data}/>
      // }

        return (
            <div style={{
                backgroundImage: "url('../../images/background.jpg')",height: '100%'
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
                      <Grid.Column width={8}>
                        <AddQuestionAnswerSet handlerAddQASet={this.addQuestionAnswerSet}/>
                        </Grid.Column>

                    <Grid.Column width={8}>
                        <DisplayQAset handlerdisplayQASet = {this.displayQuestionAnswerSet}/>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                     {(this.state.type === "add") ? (<BuildAI />):(this.state.displayQuestionAnswer)}
                   </Grid.Row>
                </Grid>
            </div>
        );
    }
}
