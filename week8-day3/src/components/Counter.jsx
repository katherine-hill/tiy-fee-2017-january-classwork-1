import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return (
            <p>Amount of things I won't be doing: {this.props.count}</p>
        );
    }
}

export default Counter;
