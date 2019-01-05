import React, { Component } from 'react';
import PageHeader from '../PageHeader';
import Table from '../Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <Table />
      </div>
    );
  }
}

export default App;
