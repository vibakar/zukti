import React from 'react';
import {Grid, Button, Form, Dropdown, Input, Icon} from 'semantic-ui-react';
import './trainbot.css';
export default class TrainBot extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
    options: [
  { text: 'What', value: 'what' },
  { text: 'How', value: 'how' },
  { text: 'Why', value: 'why' },
  { text: 'When', value: 'when' }
]
    }}
    handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: what, value:what }, ...this.state.options],
    })
  }

  handleChange = (e, { value }) => this.setState({ currentValue: value })

  render() {
    const { currentValue } = this.state
    return(
<div style={{
    backgroundImage: "url('../../images/trainbot.jpg')",height:'100%'
}}>
<Grid >
      <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={6}>
                <Form>
               <Form.Field inline >
                 <label id="labelfield">Same As&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                 <Input placeholder='sameas' id="inputtrain"/>
                </Form.Field>
              </Form>
           </Grid.Column>
             </Grid.Row>

               <Grid.Row>
                 <Grid.Column width={8}></Grid.Column>
                 <Grid.Column width={3}>
               <Button color="teal" id="buttonadd"><Icon name='plus circle'>Add </Icon></Button>
             </Grid.Column>
           </Grid.Row>
             <Grid.Row>
               <Grid.Column width={3}></Grid.Column>
               <Grid.Column width={6}>
                 <Form>
                   <Form.Field inline>
                        <label id="labelfield">Select Intend</label>
                      <Input id="trainform">
                        <Dropdown options={this.state.options} placeholder='Intend' search selection allowAdditions
                 value={currentValue} onAddItem={this.handleAddition} onChange={this.handleChange} />
                      </Input>
                    </Form.Field>
                  </Form>
          </Grid.Column>
        </Grid.Row>
</Grid>
</div>
    )};
  }
