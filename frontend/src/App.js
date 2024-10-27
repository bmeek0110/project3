import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import Login from './components/Login';
import News from './components/News';
import Prediction from './components/Prediction';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EventList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/news" component={News} />
        <Route path="/predictions" component={Prediction} />
      </Switch>
    </Router>
  );
};

export default App;
