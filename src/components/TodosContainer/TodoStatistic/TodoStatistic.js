import React from 'react';
import { connect } from 'react-redux';
import './TodoStatistic.css';
import { actions } from '../../../actions/rootActions';



class TodoStatistic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        {
          value: 'All',
          status: null,
          action: () => this.props.handleChangeStatus({ status: null }),
        },
        {
          value: 'Active',
          status: false,
          action: () => this.props.handleChangeStatus({ status: false }),
        },
        {
          value: 'Complited',
          status: true,
          action: () => this.props.handleChangeStatus({ status: true }),
        },
      ]
    }
  }
  render() {
    const { status, todos, A_ClearCompleted } = this.props;

    return (
      <div className='statisticItems'>
        <span>
          {todos.filter(item => status === null ? item : item.checked === status).length}
          &nbsp;items left</span>
        <span>
          {this.state.buttons.map(item => <button
            onClick={item.action}
            key={item.value}
            type="button">{item.value}</button>)
          }
        </span>
        <span>
          {todos.some(item => item.checked) && <button
            type="button"
            onClick={A_ClearCompleted} 
          >Clear completed</button>}
        </span>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    A_ClearCompleted: () => dispatch(actions.CLEAR_COMPLETED.SUCCESS()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoStatistic)