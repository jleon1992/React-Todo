import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            todo: ""
        }

    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitTodo = e => {
        e.preventDefault()
        this.setState({ todo: '' })
        this.props.addTask(e, this.state.todo)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitTodo}>
                    <label>
                        Add To Do Task:
                        <input
                    type='text'
                    value={this.state.todo}
                    name="todo"
                    onChange={this.handleChanges}
                    />
                    
                    </label>  
                    <button>Add Task</button>                  
                </form>
            </div>
        )
       
    }
}
export default TodoForm