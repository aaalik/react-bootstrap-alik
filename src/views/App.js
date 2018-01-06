import React, { Component } from 'react';
import Header from '../components/Header';
import { Button, PageHeader, Row, Col, Panel, Table } from 'react-bootstrap';

const panelTitle = (
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
                <Panel header={panelTitle} bsStyle="primary">
                  Description
                  </Panel>
              </div>
            </Col>
            <Col xs={6} md={9}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
              <Button bsStyle="primary">alalalal</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
