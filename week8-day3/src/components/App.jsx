// import React from 'react';
import React, {Component} from 'react';
import Form from './Form';
import Counter from './Counter';
import EmptyMessage from './EmptyMessage';
import ListItem from './ListItem';
import {getKeys} from '../util';
import {formatPrice} from '../util';

class App extends Component {
    constructor() {
        super();

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            tasks: {}
        };
    }

    addItem(newTask) {
        const tasks = {
            ...this.state.tasks
        };
        tasks[`task-${newTask.id}`] = newTask;
        this.setState({tasks});
    }

    deleteItem(taskId) {
        const tasks = {
            ...this.state.tasks
        };
        getKeys(this.state.tasks).map((taskKey) => {
            if (taskKey === `task-${taskId}`) {
                delete tasks[taskKey];
            }
            return tasks;
        });
        this.setState({tasks});
    }

    render() {
        return (
            <div className="container">
                <div className="form-container">
                    <h1>To Don't List</h1>
                    <Form add={this.addItem}/>
                    <Counter count={getKeys(this.state.tasks).length}/>
                </div>
                <div className='list-container'>
                    <EmptyMessage count={getKeys(this.state.tasks).length}/>
                    <ul>
                        {getKeys(this.state.tasks).map(taskKey => <ListItem key={taskKey} delete={this.deleteItem} details={this.state.tasks[taskKey]}/>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
