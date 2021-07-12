import './App.css';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router>
      <NavMenu />
      <Switch>
        {/*About me*/}
        <Route path="/about">
          <AboutMe />
        </Route>
        {/*Projects*/}
        <Route path="/projects">
          <Projects />
        </Route>
        {/*Contact*/}
        <Route path="/contact">
          <Contact />
        </Route>
        {/*Home*/}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
