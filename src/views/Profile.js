import React, { Component } from 'react';
import Header from '../components/Header';
import { Button, PageHeader, Row, Col, Panel, Table } from 'react-bootstrap';
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
                  <img width={150} height={150} src={users.thumbnail} alt="thumbnail" />
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
                  <img width={150} height={150} src={this.props.user.thumbnail} alt="thumbnail" />
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
                {/* <Col xs={3}>
                  <img width={150} height={150} src="https://dyn.web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.11540-24%2F21344077_294693110937438_7597413893807276032_n.jpg%3Foe%3D5A61A1B2%26oh%3D89f7177ee7dd7ededcd4c236c95e092b&t=l&u=628990902157%40c.us&i=1504706545" alt="thumbnail" />
                  <h3>Abdul Malik</h3>
                  <p>
                    4IA06<br/>
                    50414036<br/>
                    Teknik Informatika
                  </p>
                  <p>
                    PPP
                  </p>
                </Col>
                <h2>hahahaha</h2> */}
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
    user: state.activeUsers
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);
