import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import $ from 'jquery';
import Cookie from 'react-cookie';

export default class App1 extends React.Component {
	constructor () {
		super();
	}

	componentDidMount()
	{

	}

	render () {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}//end of class
