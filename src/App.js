import './App.css';
import { Switch, Route} from "react-router-dom"


import Home from "./components/jsx/Home"
import About from "./components/jsx/About"
import Services from "./components/jsx/Services"

import Header from "./components/jsx/Header"
import Footer from "./components/jsx/Footer"



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
