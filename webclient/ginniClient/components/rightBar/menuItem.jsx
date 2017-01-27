import React, {Component} from 'react'
import {Header, Menu, Checkbox, Label, Button} from 'semantic-ui-react'

export default class MenuExampleText extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <div className="menu">
                <Menu vertical>

                    <Menu.Item name='promotions' active={activeItem === 'promotions'} onClick={this.handleItemClick}><Checkbox className="check"/>
                        <Header as='h4'>Promotions</Header>
                        <p>Check out our new promotions</p>
                    </Menu.Item>

                    <Menu.Item name='Reminder' active={activeItem === 'coupons'} onClick={this.handleItemClick} className="reminder"><Checkbox className="check"/>
                        <Header as='h4'>Reminder</Header>
                        <p>View your daily Reminder of changes</p>
                    </Menu.Item>

                    <Menu.Item name='Discounts' active={activeItem === 'rebates'} onClick={this.handleItemClick}><Checkbox className="check"/>

                        <Header as='h4'>Discounts</Header>
                        <p>Get Discounts on various new Bots</p>

                    </Menu.Item>

                    <Menu.Item name='SeeFeatures' active={activeItem === 'rebates'} onClick={this.handleItemClick}><Checkbox className="check"/>
                        <Header as='h4'>SeeFeatures</Header>
                        <p>See our new exciting Features</p>
                    </Menu.Item>
                    <Menu.Item>
                        <Button primary>Submit</Button>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
