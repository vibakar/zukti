import React from "react";
import ReactDOM from "react-dom";
import Display from './displayaccordion';
import Paginator from 'react-pagify';
import segmentize from 'segmentize';
import ReactPaginate from 'react-paginate';
import Pager from 'react-pager';
import Style from '../../../css/style.css'

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.handlePageChanged = this.handlePageChanged.bind(this);

       this.state = {
           total:       11,
           current:     1,
           visiblePage: 3,
       };

    }

componentDidMount(){
  let lengthOfData = this.props.data.length;
  console.log(lengthOfData);
  console.log(this.props.data);
  let splitData=[];
  for(var i=0;i<lengthOfData;i=i+3){
    console.log(i);
  splitData.push(this.props.data.slice(i,3))
}
console.log(splitData);
}


    handlePageChanged(newPage) {
        console.log(newPage);
           this.setState({ current : newPage });
       }



    render() {
        return (
          <Pager style={Style}
                total={this.state.total}
                current={this.state.current}
                visiblePages={this.state.visiblePage}
                titles={{ first: '<|', last: '>|' }}
                className="pagination-sm pull-right"
                onPageChanged={this.handlePageChanged}
            />
        );
    }
}
