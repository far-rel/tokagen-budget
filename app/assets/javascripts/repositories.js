import Ajax from 'qwest';

let repository = (method, path) => {
  return (currentUser) => {
    let jwt = null;
    if (currentUser != null) {
      jwt = currentUser.jwt;
    }
    return (params) => {
      return Ajax[method](path, params, {
        headers: {
          'HTTP-X-JWT': jwt
        }
      });
    }
  }
};

export default {
  Session: repository('get', '/api/session.json'),
  Login: repository('post', '/api/login.json'),
  PersonalCost: {
    Create: repository('post', '/api/personal_costs.json')
  }
};
