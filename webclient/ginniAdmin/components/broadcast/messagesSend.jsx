import React from 'react'
import {Feed, Icon} from 'semantic-ui-react'
import AdminFeed from './AdminFeed'

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let feed = this.props.send.map((msg) =>< AdminFeed text = {msg}/>)
        return (
            <div>
                {feed}
            </div>
        );
    }
}
