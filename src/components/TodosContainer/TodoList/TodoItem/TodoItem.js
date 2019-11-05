import React from 'react';
import { connect } from 'react-redux';
import './TodoItem.css';
import { editTodo, removeTodo } from '../../../../services/todosService'

class TodoItem extends React.Component {
  render() {
    const { _id, value, checked, A_RemoveTodo, A_EditTodo } = this.props;
    return (
      <React.Fragment>
        <div className='todoItem'>
          <input
            id={_id}
            type='checkbox'
            name={value}
            hidden
            onClick={() => A_EditTodo({ _id, checked: !checked, value })} />
          <label htmlFor={_id} className='todoItem__label'>
            <img
              src={checked ? '/assets/images/itemChecked.svg' : '/assets/images/noChecked.svg'}
              alt={value} />
            <span className={checked ? 'checkedText' : ''}>{value}</span>
          </label>
          <button
            type='button'
            className='delBtn'
            onClick={() => A_RemoveTodo({ _id })}
          > X </button>
        </div>
      </React.Fragment>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    A_RemoveTodo: payload => dispatch(removeTodo(payload)),
    A_EditTodo: payload => dispatch(editTodo(payload)),
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
