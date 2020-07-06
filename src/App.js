import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'



const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super()
    this.state = {
      todos
    }
  }

  addTask = (e, task) => {
    e.preventDefault()
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }

  toggleTask = taskId => {
    this.setState({
      todos: this.state.todos.map(todo=>{
        if(taskId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }


  clearCompleted = e => {
    e.preventDefault()
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Todo List</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
        todos={this.state.todos}
        toggleTask={this.toggleTask}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
