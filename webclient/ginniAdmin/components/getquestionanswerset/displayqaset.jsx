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

        let url = Config.url + '/getknowledge';
        Axios.get(url).then((response) => {
          console.log(response);
            this.props.handlerdisplayQASet();
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
