import React from "react";
import ReactDOM from "react-dom";
import Display from './displayaccordion';
import FilterData from './filterData';
import FilterConcept from './filterConcept'
import Pager from 'react-pager';
import processQuestion from '../../../../webserver/routes/getReply/functions/processQuestion';
import {Grid} from 'semantic-ui-react';
import Style from '../../../css/style.css';
import './questionanswer.css';
export default class Pagination extends React.Component {
      constructor(props) {
        super(props);
        this.handlePageChanged = this.handlePageChanged.bind(this);

       this.state = {
           total:  Math.ceil(this.props.data.length/4) ,
           current:     0,
           visiblePage: 4,
           data:[],
           showData:[],
           filterData:[]
       };

    }

componentWillMount(){

  let lengthOfData = this.props.data.length;
  console.log(lengthOfData);
  console.log(this.props.data);
  let splitData=[];
  for(var i=0;i<lengthOfData;i=i+4){
    console.log(i);
  splitData.push(this.props.data.slice(i,i+4))
}
console.log(splitData);
this.setState({data:splitData})
}

componentDidMount(){
  console.log(this.state.current);
  this.state.data[0].map((data)=>
{
  this.state.showData.push(<Display questions={data.questions} answers={data.answers} />);
})
this.setState({showData:this.state.showData});
this.state.showData=[];
}

    handlePageChanged(newPage) {
      this.state.showData=[];
        console.log(newPage);
           this.state.current = newPage;
           this.state.data[this.state.current].map((data)=>{
             this.state.showData.push(<Display questions={data.questions} answers={data.answers} />);
           })
           this.setState({showData:this.state.showData});


       }
        handleDropResponse=(intent)=>{

          this.state.showData = this.state.data[this.state.current];
          console.log(this.state.showData);
          this.state.showData.map((data)=>{
            console.log(processQuestion(data.questions));
            let intentOfQuestion = processQuestion(data.questions).intents[0];
            if(intentOfQuestion === intent){
              this.state.filterData.push(<Display questions={data.questions} answers={data.answers} />)
            }

          });
          this.setState({showData:this.state.filterData});

          this.state.showData=[];
          console.log(this.state.showData);
          this.state.filterData=[];

        }

        handleConcept = (concept)=>{

          concept = concept.split(" ").join("");
          console.log(concept);
          this.state.showData = this.state.data[this.state.current];
          this.state.showData.map((data)=>{
            console.log(processQuestion(data.questions));
            let conceptOfQuestion = processQuestion(data.questions).keywords;
            console.log(conceptOfQuestion);
            conceptOfQuestion.map((con)=>{
              if(con === concept){
                            this.state.filterData.push(<Display questions={data.questions} answers={data.answers} />)
            }
          })
          })
          this.setState({showData:this.state.filterData});
          this.state.showData=[];
          console.log(this.state.showData);
          this.state.filterData=[];
        }


    render() {
        return (
          <div >
<Grid vertically>
    <Grid.Row columns={3}>
      <Grid.Column width={2}/>
      <Grid.Column width={7}>
        <Grid vertically>
            <Grid.Row columns={2}>
              <Grid.Column width={4}/>
              <Grid.Column width={12}>
            <FilterData intent={this.handleDropResponse}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid.Column>
              <Grid.Column width={7}>
                      <Grid.Column width={16}>
        <FilterConcept concept={this.handleConcept}/>
        </Grid.Column>
  </Grid.Column>
</Grid.Row>
    <Grid.Row>
      <Grid vertically>
          <Grid.Row>
            <Grid.Column width={16}>
          {this.state.showData}
</Grid.Column>
</Grid.Row>
</Grid>
</Grid.Row>
<Grid.Row>
          <Grid.Column width={16} id="pager">
          <Pager style={Style}
                total={this.state.total}
                current={this.state.current}
                visiblePages={this.state.visiblePage}
                titles={{ first: '<|', last: '>|' }}
                className="pagination-sm pull-right"
                onPageChanged={this.handlePageChanged} />

</Grid.Column>
</Grid.Row>
</Grid>
            </div>
        );
    }
}
