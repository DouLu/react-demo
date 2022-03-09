import React from 'react';
class Form extends React.Component {
	constructor(props) {
		super(props);
		// TODO: 学习bind方法的使用
		this._onNameChanged = this._onFieldChange.bind(this, 'name');
		this._onPasswordChanged = this._onFieldChange.bind(this, 'password');
	}
	render() {
		return (
			<form>
				<input onChange={this._onNameChanged} />
				<input onChange={this._onPasswordChanged} />
				<input
					onChange={(a, b) => {
						console.log(a, b);
					}}
				/>
			</form>
		);
	}
	_onFieldChange(field, event) {
		console.log(`${field} changed to ${event.target.value}`);
	}
}

export default Form;
