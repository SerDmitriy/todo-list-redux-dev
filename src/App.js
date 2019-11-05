import React from 'react';
import './App.css';
import Notification from './components/Notification/Notification';
import Router from './routes'

class App extends React.Component {
  
  render() {
    return (
      <div className='App'>
        <Router/>
        
        <Notification />
      </div>
    );
  }
}

export default App;