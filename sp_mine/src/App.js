import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

const Home = () => <h1>Strona główna</h1>
const Projects = () => <h1>Moje projekty</h1>
const Contact = () => <h1>Kontakt</h1>
const ErrorPage = () => <h1>Strona nie istnieje !</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li><NavLink to="/" exact>Strona główna</NavLink></li>
                <li><NavLink to="/my-projects">Moje projekty</NavLink></li>
                <li><NavLink to="/contact">Kontakt</NavLink></li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/my-projects" exact component={Projects} />
              <Route path="/contact" exact component={Contact} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
