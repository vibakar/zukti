import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Icon} from 'semantic-ui-react';
export default class DrawerExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="blogs"
          onTouchTap={this.handleToggle}/>
        <Drawer
          openSecondary={true}
          docked={false}
          width={700}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <Icon name='close' size='large' style={{marginLeft:'95%',marginTop:'1%',cursor:'pointer'}} onTouchTap={this.handleClose}/>
          <MenuItem onTouchTap={this.handleClose}>blog 1</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>blog 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
