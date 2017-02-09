import React from 'react';
import Axios from 'axios';
import {Button, Icon} from 'semantic-ui-react';
import Config from '../../../../config/url';

export default class AddQuestionsAnswerSet extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div >
                <Button onClick={this.props.handlerAddQASet} color='red'><Icon name='plus'/>Add Question Answer Set</Button>
            </div>
        );
    }
}
