import React from 'react';
import './TodosContainer.css';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import TodoStatistic from './TodoStatistic/TodoStatistic';

class TodosContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: null, // TODO null, true, false
    }
  }

  handleChangeStatus = ({ status }) => this.setState({ status })

  render() {
    const { status } = this.state
    return (
      <div className='todosContainer'>
        <div className='todos'>todos</div>
        <div className='container'>
          <AddTodo />
          <TodoList status={status} />
          <TodoStatistic
            status={status}
            handleChangeStatus={this.handleChangeStatus}
          />
        </div>
        <div className='additionalOne'></div>
        <div className='additionalTwo'></div>
        <div className='footer'>
          <div>Double-click to edit a todo</div>
          <div>Created by <b>petehunt</b></div>
          <div>Part of <b>TodoMVC</b></div>
        </div>
      </div>

    )
  }
}

export default TodosContainer
