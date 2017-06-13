import CreateTodo from './components/create-todo';
import React, {Component} from 'react';
import TodosList from './components/todos-list';
import './App.css';

const todos = [
  {
    task: 'Finish React Todo\'s App',
    isCompleted: false
  }, {
    task: 'Learn React',
    isCompleted: false
  }, {
    task: 'Sleep',
    isCompleted: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        todos
      };
  }

  render() {
    return (
      <div className="App">
        <h1>React Todo's Application</h1>
        <CreateTodo createTask={this.createTask.bind(this)}  />
        <TodosList 
          todos={this.state.todos}
        />
      </div>
    );
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }
}

export default App;
