import React from 'react';
import { connect } from 'react-redux';
import { changeField, submitForm } from '../actions/login_form';
import BasicForm from './utils/basic_form';

class LoginForm extends React.Component {

  onEmailChange (e) {
    this.props.dispatch(changeField('email', e.target.value));
  }

  onPasswordChange (e) {
    this.props.dispatch(changeField('password', e.target.value));
  }

  submitForm () {
    this.props.dispatch(submitForm(this.props.email, this.props.password));
  }

  render () {
    return (
      <BasicForm
        className='pure-form pure-form-aligned'
        handleSubmit={this.submitForm.bind(this)}
      >
        <div className='pure-control-group'>
          <label htmlFor='login_email'>{'Email'}</label>
          <input
            autoFocus={true}
            value={this.props.email}
            onChange={this.onEmailChange.bind(this)}
            id='login_email'
          />
        </div>
        <div className='pure-control-group'>
          <label htmlFor='login_password'>{'Password'}</label>
          <input
            type='password'
            value={this.props.password}
            onChange={this.onPasswordChange.bind(this)}
            id='login_password'
          />
        </div>
        <div className='pure-controls'>
          <button
            className='pure-button pure-button-primary'
            onClick={this.submitForm.bind(this)}
          >
            {'Login'}
          </button>
        </div>
      </BasicForm>
    );
  }

}

let mapStateToProps = state => {
  return {
    email: state.loginForm.email,
    password: state.loginForm.password
  };
};

export default connect(mapStateToProps)(LoginForm);
