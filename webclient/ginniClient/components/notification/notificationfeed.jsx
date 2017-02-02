import React from 'react'
import {Feed, Icon} from 'semantic-ui-react'

export default class Notificationfeed extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {

        return (

            <Feed>
                <Feed.Label image='http://semantic-ui.com/images/avatar/small/joe.jpg'/>
                <Feed.Content>
                    <Feed.Summary>
                        <a>Arpit</a>

                    </Feed.Summary>
                    <Feed.Extra text>
                      {this.props.feed}
                    </Feed.Extra>
                </Feed.Content>
            </Feed>
        );
    }
}
