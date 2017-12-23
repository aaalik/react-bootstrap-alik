import React, { Component } from 'react';
import Header from '../components/Header';
import { Button, PageHeader, Row, Col, Panel } from 'react-bootstrap';

const panelTitle =  (
  <h3>Picture Here</h3>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <PageHeader>Homie <small>First time using React</small></PageHeader>
          
            <Row>
              <Col xs={12} md={3}>
                <div>
                  <Panel header={panelTitle}>
                    Description
                  </Panel>
                </div>
              </Col>
              <Col xs={6} md={9}>
              <Button bsStyle="primary">alalalal</Button>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default App;
