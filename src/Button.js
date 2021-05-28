import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.function}>{this.props.pokemon.type}</button>
		);
	}
}

export default Button;