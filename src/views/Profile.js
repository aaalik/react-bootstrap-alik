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
 
}
  render() {
    console.log(this.props.user.first);
    return this.props.users.map((users) => {
        return (
          <div>       
            <Col xs={3} key={users.id} onClick={()=>this.props.selectUser(users)}>
                  <img width={150} height={150} src={users.thumbnail} alt="thumbnail" />
                  <h3>{users.first} {users.last}</h3>
                  <p>
                    {users.kelas}<br/>
                    {users.npm}<br/>
                    {users.jurusan}
                  </p>
                </Col>
                <br/>
                <br/>
                <h1> User yang aktif</h1>
                <h1> {this.props.user.first}
                 {this.props.user.last}</h1>
              </div>
        );
    });
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
