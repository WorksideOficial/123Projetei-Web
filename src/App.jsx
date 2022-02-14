import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import "./styles/Global.scss";
import { Editar } from './pages/Editar';

function App() {
  return (
        <Router>
          <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cadastro" exact component={Register} />
              <Route path="/edit/:id" exact component={Editar} />
              <Route path="/login" exact component={Login} />
            </Switch>
          <Footer />
        </Router>
  );
}

export default App;
