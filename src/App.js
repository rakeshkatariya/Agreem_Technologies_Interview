import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import { Switch, Route } from "react-router-dom"
import Home from './components/Home.js';
import About from './components/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resulte from './components/Resulte.js';

function App() {
  return (
    <>
      <Navbaar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resulte" component={Resulte} />
        <Route exact path="/about" component={About} />
      </Switch>

    </>
  );
}

export default App;
