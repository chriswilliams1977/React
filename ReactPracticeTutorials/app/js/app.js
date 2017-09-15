import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Global/Menu.jsx';
import App from './views/App';
import Home from './views/Home';
import About from './views/About';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Menu/>, document.getElementById('app'));
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } />
    </Route>
  </Router>,
  document.getElementById('app')
);
