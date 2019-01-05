import React, { Component } from 'react';
import PageHeader from '../PageHeader';
import Table from '../Table';
import Form from '../Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <Table />
        <Form />
      </div>
    );
  }
}

export default App;
