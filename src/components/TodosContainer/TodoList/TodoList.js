import React from 'react';
import { connect } from 'react-redux';
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';
import { fetchTodos } from '../../../services/todosService'


class TodoList extends React.Component {
  componentDidMount() {
    this.props.A_FetchTodos();
  }

  render = () => {
    let { todos, showTodos, status } = this.props;
    return (
      <div className='TodoList'>
        {todos
          .filter(item => status === null ? item : item.checked === status)
          .map(item => <TodoItem key={item._id} {...item} showTodos={showTodos} />)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    showTodos: state.todosReducer.showTodos,
    showTodoByType: state.todosReducer.showTodoByType,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    A_FetchTodos: () => dispatch(fetchTodos())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)