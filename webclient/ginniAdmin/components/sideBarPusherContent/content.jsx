import React from 'react';
import SetUpBot from '../buildAi/setUpBot';
import UserMenu from '../users/userMenu';
import Analytics from '../Analytics/info';
import Broadcast from '../broadcast/broadcast';
import TrainBot from '../trainbot/trainbot';
import AddConcept from '../addConcept/addConcepts';
import UnansweredQueries from '../unansweredqueries/unansweredqueries';
import IndexComponent from '../views/viewGraph';
import Graph from '../views/htmlGraph';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        switch (this.props.sidebarItemSelected) {
            case 'SetupAi':
                {
                    return <SetUpBot/>;
                }
            case 'BroadCast':
                {
                    return <Broadcast/>;
                }
            case 'Users':
                {
                    return <UserMenu/>;
                }
            case 'Analyze':
                {
                    return <Analytics/>;
                }
            case 'TrainBot':
                {
                    return <TrainBot/>;
                }
            case 'Unanswered Queries':
                {
                    return <UnansweredQueries/>;
                }
            case 'Manage Concept':
                {
                    return <AddConcept/>;
                }
            case 'View Graph':
                {
                    return <IndexComponent/>;
                }
            case 'Test Graph':
                {
                    return <Graph/>;
                }
        }
    }
}
