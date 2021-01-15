import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BlogDetails from './Components/BlogDetails';

import Home from './Components/Home';
import NewTag from './Components/newtag';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  document.title = 'Web Crawler';
  return (
    <React.Fragment>
      <div className="area">
        <div className="context">
          <section className="container">
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Home blogs={blogs} setBlogs={setBlogs} />}
                />
                <Route exact path="/details" component={BlogDetails} />
                <Route
                  exact
                  path="/tag"
                  component={NewTag}
                />
              </Switch>
            </Router>
          </section>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
