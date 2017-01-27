import React from 'react';
import AddQuestionCategory from '../QuestionCategory/addQuestionCategory';
import BuildAi from '../buildAi/questionSetDisplay'
import UserTable from '../users/usertable';
import Analytics from '../Analytics/info';
import BroadCast from '../broadCast/broadCast';
export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        switch (this.props.sidebarItemSelected) {
            case 'SetupAi':
                {
                    return <AddQuestionCategory/>
                }
            case 'BroadCast':
                {
                    return <BroadCast/>
                }
            case 'Users':
                {
                    return <UserTable/>
                }
            case 'Analyze':
                {
                    return <Analytics/>
                }
            case 'UseTheBot':
                {
                    return <BuildAi/>
                }
        }
    }
}
