import React from 'react';

class EmptyMessage extends React.Component {
    render() {
        if (this.props.count === 0) {
            return <p>You have not yet added things to not do to your list of things not to do.</p>
        } else {
            return false;
        }
    }
}

export default EmptyMessage;
