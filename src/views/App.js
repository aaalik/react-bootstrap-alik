import React, { Component } from 'react';
import Header from '../components/Header';
import { Button, PageHeader } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <PageHeader>Homie <small>First time using React</small></PageHeader>
        <Button bsStyle="primary">alalalal</Button>
        </div>
      </div>
    );
  }
}

export default App;
