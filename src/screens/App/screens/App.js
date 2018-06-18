import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom'
import { Jobs } from './Jobs'
import { Leads } from './Leads'
import { LogIn } from './LogIn'
import { Materials } from './Materials'
import { Quotes } from './Quotes'
import { Vendors } from './Vendors'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Switch>
              <Route path='/' component={LogIn} loc='https://auth.fetters15.hasura-app.io/ui/login' />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/leads" component={Leads} />
              <Route exact path="/materials" component={Materials} />
              <Route exact path="/quotes" component={Quotes} />
              <Route exact path="/vendors" component={Vendors} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
