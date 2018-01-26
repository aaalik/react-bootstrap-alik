import React, { Component } from 'react';
import Header from '../components/Header';
import { PageHeader, Row, Col, Panel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { selectUser } from '../actions/index';

const panelTitle = (
  <h3>Picture Here</h3>
);

class Profile extends Component {
  renderList() {
    console.log(this.props);
    return this.props.users.map((users) => {
        return (
            <Col xs={3} key={users.id} onClick={()=>this.props.selectUser(users)}>
                  <img width={170} height={170} src={users.thumbnail} alt="thumbnail" />
                  <h3>{users.first} {users.last}</h3>
                  <p>
                    {users.kelas}<br/>
                    {users.npm}<br/>
                    {users.jurusan}
                  </p>
                </Col>
        );
    });
}
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <PageHeader>Profile <small>First time using React</small></PageHeader>

          <Row>
            <Col xs={3}>
              <div>
                <Panel header={panelTitle} bsStyle="primary">
                  <img width={200} height={200} src={this.props.user.thumbnail} alt="thumbnail" />
                  <h3>{this.props.user.first} {this.props.user.last}</h3>
                  <p>
                    {this.props.user.kelas}<br/>
                    {this.props.user.npm}<br/>
                    {this.props.user.jurusan}
                  </p>  
                </Panel>
              </div>
            </Col>
            <Col xs={9}>
              <Row>
                {this.renderList()}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    users: state.users,
    user: state.activeUser
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);
