import React from 'react';
import render  from 'react-dom';
import Axios from 'axios';
import {Button, Icon,Input, Dropdown ,Grid, Card, Divider} from 'semantic-ui-react';
import ReactDOM from "react-dom";
import './display.css';

const options = [
  {
    key: 1,
    text: 'Intent',
    value: 1
  },
  {
    key: 2,
    text: 'Concept',
    value: 2
  }
]
export default class DisplayQuestionAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
     todos: ['what is react?','what is component?','what is router?','what is reactrouter?','what is state?','what is props?','what is component will mount?','what is component did mount?','what is component in react?','what is component lifecycle?'],
     currentPage: 1,
     todosPerPage: 3
   };
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick(event) {
     this.setState({
       currentPage: Number(event.target.id)
     });
   }
    render()
    {
    const { todos, currentPage, todosPerPage } = this.state;

   // Logic for displaying current todos
     const indexOfLastTodo = currentPage * todosPerPage;
     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
     const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

   const renderTodos = currentTodos.map((todo, index) => {
       return <p key={index}>
         <Grid vertically>
           <Grid.Row columns={3}>
             <Grid.Column width={3}></Grid.Column>
             <Grid.Column width={10}>
         <Card fluid id='cardwidth'>{todo}
         </Card>
       </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
     </Grid></p>;
     });

   // Logic for displaying page numbers
     const pageNumbers = [];
     for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
       pageNumbers.push(i);
     }

   const renderPageNumbers = pageNumbers.map(number => {
       return (
         <li
           key={number}
           id={number}
           onClick={this.handleClick}
         >
           {number}
         </li>
       );
     });
             return (
            <div >
              <Grid  vertically>
                <Grid.Row></Grid.Row>
                <Grid.Row columns={3} >
                  <Grid.Column width={5}></Grid.Column>
                        <Grid.Column width={4}>
               <Input icon='search' placeholder='Search...' />
             </Grid.Column>
             <Grid.Column width={4}>
               <Dropdown selection options={options} placeholder='FilterBy' />
             </Grid.Column>
</Grid.Row>
<Grid.Row>
  <Grid.Column width={16}>
  <div>
         <ul>
           {renderTodos}
         </ul>
         <ul id="page-numbers">
           {renderPageNumbers}
         </ul>
       </div>
     </Grid.Column>
     </Grid.Row>
            </Grid></div>
        );
    }
}
