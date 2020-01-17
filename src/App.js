import React from 'react';
import './css/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from "./Containers/Main"

const App = () => {

return(
  <Router>
    <div className="App">
      <Main />
    </div>
  </Router>
)
}

export default App;
