import React, {Component} from 'react';
import {Dropdown, Icon, Menu, Segment} from 'semantic-ui-react';

import {
    Form,
    Input,
    Card,
    Button
} from 'semantic-ui-react';

export default class Payment extends React.Component {
state = { activeItem: 'credit card',open1:false,open2:true,open3:true}
handleItemClick = (e, { name }) => {console.log(name);this.setState({ activeItem: name , open1: false , open2: true , open3: true })}
handleItemClick1 = (e, { name }) => {console.log(name);this.setState({ activeItem: name , open1: true , open2: false , open3: true  })}
handleItemClick2 = (e, { name }) => {console.log(name);this.setState({ activeItem: name , open1: true , open2: true , open3: false  })}
    render() {
const {activeItem}=this.state
        return (
          <div>
            <Menu attached='top' tabular>
                      <Menu.Item name='credit card' active={this.state.activeItem === 'credit card'} onClick={this.handleItemClick} />
                      <Menu.Item name='debit card' active={this.state.activeItem === 'debit card'} onClick={this.handleItemClick1} />
                      <Menu.Item name='netbanking' active={this.state.activeItem === 'netbanking'} onClick={this.handleItemClick2} />
                    </Menu>

                    <Segment attached='bottom' hidden={this.state.open1}>
               <Card.Group>
                   <Card centered="true">
                       <Card.Content>

                           <Form>

                               <Icon name='visa' inverted color='blue' size='big'/> {'                                                 '}
                               <Icon name='mastercard' color='red' size='big'/>

                               <Form.Field control={Input} label='CARD NUMBER' placeholder='Card Number'/>

                               <Form.Field label='MONTH'/>
                               <select className="ui dropdown">

                                   <option value="0">month</option>
                                   <option value="1">jan</option>
                                   <option value="2">feb</option>
                                   <option value="3">mar</option>
                                   <option value="4">april</option>
                                   <option value="5">may</option>
                                   <option value="6">june</option>
                                   <option value="7">july</option>
                                   <option value="8">aug</option>
                                   <option value="9">sep</option>
                                   <option value="10">oct</option>
                                   <option value="11">nov</option>
                                   <option value="12">dec</option>
                               </select><br/>
                               <Form.Field label='YEAR'/>
                               <select className="ui dropdown">

                                   <option value="0">year</option>
                                   <option value="1">18</option>
                                   <option value="2">19</option>
                                   <option value="3">20</option>
                                   <option value="4">21</option>
                                   <option value="5">22</option>
                                   <option value="6">23</option>
                                   <option value="7">24</option>
                                   <option value="8">25</option>
                                   <option value="9">26</option>
                                   <option value="10">27</option>
                                   <option value="11">28</option>
                                   <option value="12">29</option>
                               </select><br/>
                               <Form.Field control={Input} label='CVV/CVC' placeholder='Enter 3 digit CVV/CVC'/>

                               <Form.Field control={Input} label='CARD HOLDER NAME' placeholder='Enter card holder name'/>
                               <Button primary size='large' fluid>Make Payment</Button>

                           </Form>
                       </Card.Content>
                   </Card>
               </Card.Group>
             </Segment>
             <Segment attached='bottom' hidden={this.state.open2}>
               <Card.Group>
                   <Card centered="true">
                       <Card.Content>

                           <Form>

                               <Icon name='visa' inverted color='blue' size='big'/> {'                                                 '}
                               <Icon name='mastercard' color='red' size='big'/>

                               <Form.Field control={Input} label='CARD NUMBER' placeholder='Card Number'/>

                               <Form.Field label='MONTH'/>
                               <select className="ui dropdown">

                                   <option value="0">month</option>
                                   <option value="1">jan</option>
                                   <option value="2">feb</option>
                                   <option value="3">mar</option>
                                   <option value="4">april</option>
                                   <option value="5">may</option>
                                   <option value="6">june</option>
                                   <option value="7">july</option>
                                   <option value="8">aug</option>
                                   <option value="9">sep</option>
                                   <option value="10">oct</option>
                                   <option value="11">nov</option>
                                   <option value="12">dec</option>
                               </select><br/>
                               <Form.Field label='YEAR'/>
                               <select class="ui dropdown">

                                   <option value="0">year</option>
                                   <option value="1">18</option>
                                   <option value="2">19</option>
                                   <option value="3">20</option>
                                   <option value="4">21</option>
                                   <option value="5">22</option>
                                   <option value="6">23</option>
                                   <option value="7">24</option>
                                   <option value="8">25</option>
                                   <option value="9">26</option>
                                   <option value="10">27</option>
                                   <option value="11">28</option>
                                   <option value="12">29</option>
                               </select><br/>
                               <Form.Field control={Input} label='CVV/CVC' placeholder='Enter 3 digit CVV/CVC'/>

                               <Form.Field control={Input} label='CARD HOLDER NAME' placeholder='Enter card holder name'/>
                               <Button primary size='large' fluid>Make Payment</Button>

                           </Form>
                       </Card.Content>
                   </Card>
               </Card.Group>
</Segment>
<Segment attached='bottom' hidden={this.state.open3}>
               <Card.Group>
                   <Card centered="true">
                       <Card.Content>
                         <Form.Field label='SELECT YOUR BANK'/>
                         <select class="ui dropdown">
                             <option value="0">Select the bank</option>
                             <option value="1">SBI</option>
                             <option value="2">INDIAN OVERSEAS BANK</option>
                             <option value="3">HDFC</option>
                             <option value="4">HSBC</option>
                             <option value="5">AXIS</option>
                             <option value="6">ICICI</option>
                             <option value="7">KOTAK</option>
                             <option value="8">PUNJAB NATIONAL BANK</option>
                             <option value="9">KVB</option>
                             <option value="10">ANDHRA BANK</option>

                         </select><br/><br/>
                         <Button primary size='small'>SUBMIT</Button>

                       </Card.Content>
                   </Card>
               </Card.Group>
</Segment>
</div>
        );
    }
}
