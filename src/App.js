import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import PoP from './pages/PoP';
import Law from './pages/Law';
import Error from './pages/Error';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  AOS.init({ easing:'ease', duration: 1800, once: true });
  return (
    <BrowserRouter>
      <div>

        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch>
                <Route path="/portGHP" component={Intro} exact />
                <Route path="/portGHP/Home" component={Home} />
                <Route path="/portGHP/About" component={About} />
                <Route path="/portGHP/PoP" component={PoP} />
                <Route path="/portGHP/Law" component={Law} />
                <Route component={Error} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />

      </div>
    </BrowserRouter>
  );
}

export default App;
