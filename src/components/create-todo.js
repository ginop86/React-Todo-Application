import React, { Component } from 'react';

export default class CreateTodo extends Component {

    render() {
        return (
            <from onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
            </from>
        )
    }
    handleCreate(event) {
        // event.preventDefault();

        console.log(this.refs.createInput)
        this.props.createTask(this.refs.createInput.value);
    }
}
