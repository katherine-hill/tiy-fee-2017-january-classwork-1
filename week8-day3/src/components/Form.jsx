import React, {Component} from 'react';

class Form extends Component {
    processItem(e) {
        e.preventDefault();
        const task = {
            description: this.description.value,
            id: Date.now(),
            title: this.title.value
        };

        this.props.add(task)
        this.form.reset();
    }

    render() {
        return (
            <form ref={(trinket) => this.form = trinket} autoComplete="off" onSubmit={this.processItem.bind(this)}>
                <input ref={(titleInput) => this.title = titleInput} type="text" name="title" required/>
                <textarea ref={(descInput) => this.description = descInput} required></textarea>
                <input type="submit" value="Add Item"/>
            </form>
        );
    }
}

export default Form;
