import React from 'react';
import {Image, Grid} from 'semantic-ui-react';
import './defaultpageclient.css';
export default class Defaultpage extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <Grid id="defaultgrid" style={{
                backgroundImage: "url('../../images/background.jpg')"
            }}>
                <Grid.Row columns={1}>
                    <div id="defaultdiv">
                        <Image src='../../images/reactlogo.png' centered size='small'/>
                        <h1 id='sparkle'>REACT</h1>
                        <h2>Make your development easy with Genie.</h2>
                          <h3>
                            <i>"Keep your ears open, grab everything you can, react, and learn"</i>
                        </h3>
                        <h5 id='defaulthead'>For further questions click on let's talk and get your questions answered.
                        </h5>
                    </div>
                </Grid.Row>
            </Grid>
        );
    }
}
