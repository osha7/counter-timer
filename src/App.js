import React from 'react';
import './App.css';
import Counter from './components/counter'
import Timer from './components/timer'

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <br />
        App TESTING
        <br /><br />
        <Counter />
        <br /><br />
        <Timer />
      </div>
    )
  }
}
