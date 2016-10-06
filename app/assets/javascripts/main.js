import { render } from 'react-dom';

import routes from './routes.jsx';


document.addEventListener('DOMContentLoaded', (event) => {
  render(
    routes,
    document.getElementById('app')
  );
});
