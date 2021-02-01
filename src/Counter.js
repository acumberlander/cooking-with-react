import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: props.initialCount,
		};
	}

	increment = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	decrement = () => {
		this.setState((prevState) => ({ count: prevState.count - 1 }));
	};

	render() {
		return (
			<ThemeContext.Consumer>
				{(style) => (
					<div>
						<button style={style} onClick={() => this.decrement()}>
							-
						</button>
						<span>{this.state.count}</span>
						<button style={style} onClick={() => this.increment()}>
							+
						</button>
					</div>
				)}
			</ThemeContext.Consumer>
		);
	}
}
