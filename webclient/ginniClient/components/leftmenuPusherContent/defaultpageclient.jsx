import React from 'react';
import {Image, Grid} from 'semantic-ui-react';
import './defaultpageclient.css'
export default class Defaultpage extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <Grid id="defaultgrid" style={{
                backgroundImage: "url('../../images/wall8.jpg')"
            }}>
                <Grid.Row columns={1}>
                    <div id="defaultdiv">
                        <Image src='../../images/reactlogo.png' centered size='small'/>
                        <h1>REACT</h1>
                        <h2>Build your React application in minutes.</h2>
                        <h3><i>"Keep your ears open, your eyes open, grab everything you can, react, and learn"</i></h3>
                        <h5 id='defaulthead'>FOR FURTHER QUESTIONS CLICK ON THE CHAT BOT AND GET YOUR QUESTIONS ANSWERED BY OUR GENIE.
                        </h5>
                    </div>
                </Grid.Row>
            </Grid>
        );
    }
}
