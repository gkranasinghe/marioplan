import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const mapStateToProps = state => {
  return {
    //better use projects :state.project coursera way
    projects: state.firestore.ordered.projects
  };
};
//const mapDispatchToProps = {};

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { projects } = this.props;
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(Dashboard);
//when ever firestore database changes firebase reduser will update the change 