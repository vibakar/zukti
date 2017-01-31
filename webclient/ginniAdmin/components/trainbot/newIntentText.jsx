import React from 'react';
import {Form, Input, Divider, Button, Icon} from 'semantic-ui-react';
import TrainBot from './trainbot';
export default class NewIntentText extends React.Component {
    constructor(props) {
        super(props);
            }



    // bind the dropdown with base intents from neo4j databse

    // function to handle dropdown change


    render() {
        return (
            <Form>
                <Form.Field >
                  <h4>ADD A NEW INTENT</h4>
                  <Divider />
                    <label>
                        <h4>Enter The New Intent</h4>
                    </label>

                        <Input icon='edit' iconPosition='left' placeholder='New Intent'/><br />
                        <br />
                        <Button color="teal" fluid onClick={this.props.open}>
                            <Icon name='plus circle'>Add
                            </Icon>
                        </Button>
                </Form.Field>
            </Form>
        );
    }
}
