import React from 'react';
import BuildAi from '../buildAi/questionSetDisplay'
import UserTable from '../users/usertable';
import Analytics from '../Analytics/info';
import BroadCast from '../broadCast/broadCast';
import TrainBot from '../trainbot/trainbot';
import UnansweredQueries from '../unansweredqueries/unansweredqueries';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        switch (this.props.sidebarItemSelected) {
            case 'SetupAi':
                {
                    return <BuildAi/>
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
                case 'TrainBot':
                    {
                        return <TrainBot/>
                    }
                    case 'Unanswered Queries':
                        {
                            return <UnansweredQueries/>
                        }
        }
    }
}
