import React, {Component} from 'react';

class ListItem extends Component {
    render() {
        const details = this.props.details;
        return (
            <li>
                <img src="http://findicons.com/files/icons/1580/devine_icons_part_2/128/trash_recyclebin_empty_closed.png" alt="Delete" onClick={() => this.props.delete(details.id)}/>
                <h3 className="has-spacer">{details.title}</h3>
                <p>{details.description}</p>
            </li>
        );
    }
}

export default ListItem;
