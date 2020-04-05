import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {};

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) {
      return <Redirect to='/' />;
    }
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3 '>Sign Up</h5>
          <div className='input-field'>
            <label htmlFor='lastname'>Last Name</label>
            <input type='text' id='lastname' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='firstname'>First Name</label>
            <input type='text' id='firstname' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0 '>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
