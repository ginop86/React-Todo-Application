import _ from 'lodash';
import React, { Component } from 'react';
import TodoListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends Component {
    renderItems() {
        //es6 syntax task={todo.task} isCompleted={todo.isCompleted}
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
    }
    render() {
        return (
            <table>
                <TodoListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}
