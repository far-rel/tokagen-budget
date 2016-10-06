import React from 'react';
import cookie from 'react-cookie';
import { connect } from 'react-redux';
import { check } from '../actions/session';

class Main extends React.Component {

  componentDidMount () {
    this.props.dispatch(check());
  }

  componentDidUpdate () {
    if (this.props.jwt == null) {
      cookie.remove('jwt');
    } else {
      cookie.save('jwt', this.props.jwt);
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

let mapStateToProps = state => {
  let jwt = null;
  if (state.currentUser != null) {
    jwt = state.currentUser.jwt;
  }
  return {
    jwt: jwt
  };
};


export default connect(mapStateToProps)(Main);
