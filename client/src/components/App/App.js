import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../PageHeader';
import Table from '../Table';
import Form from '../Form';
import './App.css';

library.add(faPlus);

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
