import React from 'react';
import Axios from 'axios';
import {Button, Icon} from 'semantic-ui-react';
import Config from '../../../../config/url';

export default class DisplayQAset extends React.Component {
    constructor(props) {
        super(props);
        this.displayQuestionSetBlock = this.displayQuestionSetBlock.bind(this);
    }
    displayQuestionSetBlock() {
        let questionSet = [];
        let answerSet = [];
        let url = Config.url + '/getknowledge';
        Axios.get(url).then((response) => {
            questionSet = response.data.questionSet;
            answerSet = response.data.answerSet;
            let set=[];
            for(var i=0;i<questionSet.length;i++){
              set[i]={questions:questionSet[i],answers:answerSet[i].properties}
            }
            this.props.handlerdisplayQASet(set);
        }).catch((error) => {
            alert(error);
        });

    }
    render() {
        return (
            <div >
                <Button onClick={this.displayQuestionSetBlock} color='red'><Icon name='find'/>Display Question Answer Set</Button>
            </div>
        );
    }
}
