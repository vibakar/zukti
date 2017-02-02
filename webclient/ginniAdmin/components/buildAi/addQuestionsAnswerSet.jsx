import React from 'react';
import Axios from 'axios';
import {Button, Icon} from 'semantic-ui-react';
import Config from '../../../../config/url';

export default class AddQuestionsAnswerSet extends React.Component {
    constructor(props) {
        super(props);
        this.createQuestionSetBlock = this.createQuestionSetBlock.bind(this);
    }
    createQuestionSetBlock() {
        let url = Config.url + '/qa/addQuestionAnswerSet';
        Axios.post(url).then((response) => {
            let qaID = response.data.id;
            this.props.handlerAddQASet(qaID);
        }).catch((error) => {
          alert(error);
        });


    }
    render() {
        return (
            <div >
                <Button onClick={this.createQuestionSetBlock} color='red'><Icon name='plus'/>Add Question Answer Set</Button>
            </div>
        );
    }
}
