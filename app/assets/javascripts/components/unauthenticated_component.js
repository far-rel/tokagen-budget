import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class UnauthenticatedComponent extends React.Component {

  componentDidUpdate () {
    if (this.props.loggedIn) {
      this.props.dispatch(push('/personal-costs'))
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

UnauthenticatedComponent.onEnter = (store) => {
  return (nextState, replace) => {
    if (store.getState().currentUser != null) {
      replace('/');
    }
  }
};

let mapStateToProps = state => {
  return {
    loggedIn: (state.currentUser != null)
  }
};

export default connect(mapStateToProps)(UnauthenticatedComponent);
