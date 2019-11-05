import React from 'react';
import './Notification.css';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';


class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: []
    }
  }

  componentDidMount() {
    this.findErrors()
  }
  componentWillReceiveProps(newProps) {
    this.findErrors()
  }

  findErrors = () => {
    const newState = this.props.combineState
    let newErrors = [];
    Object.keys(newState).forEach(i => newState[i].errors ? newErrors.push(newState[i].errors) : null) 
    this.setState({ errors: newErrors })
  }

  render() {
    const { showPortal, children } = this.props;
    const { errors } = this.state
    
    return showPortal || errors.length ? ReactDOM.createPortal(
      <div className="notification" key='notific'>
          {showPortal ? children : errors.map(err => {
            return (<div>{err}</div>)
          })}
      </div> 
      ,
      document.getElementById('notification')
    ) : null
  }
}

const mapStateToProps = state => {
  return {
    combineState: {...state}
  }
}

export default connect(mapStateToProps, null)(Notification)